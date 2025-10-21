'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import type { AppError } from '@/types';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: AppError) => void;
}

interface State {
  hasError: boolean;
  error: AppError | null;
}

/**
 * Error Boundary component for catching and handling React errors
 * Provides a fallback UI when errors occur in the component tree
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    const appError: AppError = {
      code: 'REACT_ERROR',
      message: error.message,
      details: {
        stack: error.stack,
        name: error.name,
      },
      timestamp: new Date().toISOString(),
    };

    return {
      hasError: true,
      error: appError,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    const appError: AppError = {
      code: 'REACT_ERROR',
      message: error.message,
      details: {
        stack: error.stack,
        name: error.name,
        componentStack: errorInfo.componentStack,
      },
      timestamp: new Date().toISOString(),
    };

    this.setState({ error: appError });
    this.props.onError?.(appError);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <div className="mb-6 rounded-full bg-red-100 p-4">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
          
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Something went wrong
          </h2>
          
          <p className="mb-6 max-w-md text-gray-600">
            We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
          </p>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mb-6 max-w-2xl rounded-lg bg-gray-100 p-4 text-left">
              <summary className="mb-2 cursor-pointer font-medium text-gray-900">
                Error Details (Development)
              </summary>
              <pre className="whitespace-pre-wrap text-sm text-gray-700">
                {JSON.stringify(this.state.error, null, 2)}
              </pre>
            </details>
          )}

          <div className="flex gap-4">
            <Button onClick={this.handleRetry} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            
            <Button
              onClick={() => window.location.reload()}
              variant="default"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component that wraps a component with ErrorBoundary
 * @param Component - The component to wrap
 * @param errorBoundaryProps - Props to pass to ErrorBoundary
 * @returns Wrapped component with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}
