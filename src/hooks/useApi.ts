import { useState, useEffect, useCallback } from 'react';
import type { ApiResponse, AppError } from '@/types';

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: unknown) => void;
  onError?: (error: AppError) => void;
}

/**
 * Custom hook for making API calls with loading states and error handling
 * @param apiCall - Function that returns a Promise
 * @param options - Configuration options
 * @returns Object with data, loading, error, and refetch function
 */
export function useApi<T = unknown>(
  apiCall: () => Promise<ApiResponse<T>>,
  options: UseApiOptions = {}
) {
  const { immediate = true, onSuccess, onError } = options;
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<AppError | null>(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiCall();
      
      if (response.success) {
        setData(response.data);
        onSuccess?.(response.data);
      } else {
        const apiError: AppError = {
          code: 'API_ERROR',
          message: response.message || 'An error occurred',
          details: { response },
          timestamp: new Date().toISOString(),
        };
        setError(apiError);
        onError?.(apiError);
      }
    } catch (err) {
      const apiError: AppError = {
        code: 'NETWORK_ERROR',
        message: err instanceof Error ? err.message : 'Network error occurred',
        details: { originalError: err },
        timestamp: new Date().toISOString(),
      };
      setError(apiError);
      onError?.(apiError);
    } finally {
      setLoading(false);
    }
  }, [apiCall, onSuccess, onError]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  const refetch = useCallback(() => {
    execute();
  }, [execute]);

  return {
    data,
    loading,
    error,
    refetch,
  };
}

/**
 * Custom hook for making API calls with retry logic
 * @param apiCall - Function that returns a Promise
 * @param maxRetries - Maximum number of retries
 * @param retryDelay - Delay between retries in milliseconds
 * @returns Object with data, loading, error, retry count, and refetch function
 */
export function useApiWithRetry<T = unknown>(
  apiCall: () => Promise<ApiResponse<T>>,
  maxRetries: number = 3,
  retryDelay: number = 1000
) {
  const [retryCount, setRetryCount] = useState(0);
  
  const apiCallWithRetry = useCallback(async (): Promise<ApiResponse<T>> => {
    let lastError: Error | null = null;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await apiCall();
        setRetryCount(0); // Reset retry count on success
        return response;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        
        if (attempt < maxRetries) {
          setRetryCount(attempt + 1);
          await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
        }
      }
    }
    
    throw lastError;
  }, [apiCall, maxRetries, retryDelay]);

  const apiResult = useApi(apiCallWithRetry);

  return {
    ...apiResult,
    retryCount,
  };
}
