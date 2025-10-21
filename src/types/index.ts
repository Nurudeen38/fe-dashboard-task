/**
 * Global type definitions for the dashboard application
 */

// Navigation types
export interface NavLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  hasDropdown?: boolean;
}

export interface AccordionLink {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  sublinks: NavLink[];
}

// Chart and data types
export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface ChartConfig {
  data: ChartDataPoint[];
  colors?: string[];
  height?: number;
  width?: number;
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

// API response types
export interface ApiResponse<T = unknown> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Dashboard specific types
export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  activeCustomers: number;
  conversionRate: number;
}

export interface OrderData {
  id: string;
  customerName: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
  platform: 'app' | 'website';
}

export interface CustomerData {
  id: string;
  name: string;
  email: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  status: 'active' | 'inactive';
}

// Form types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Event types
export interface CustomEvent<T = unknown> {
  type: string;
  payload: T;
  timestamp: number;
}

// Hook return types
export interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: AppError | null;
  refetch: () => Promise<void>;
}

export interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T) => void;
  removeValue: () => void;
}

// Configuration types
export interface AppConfig {
  apiUrl: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    analytics: boolean;
    notifications: boolean;
    darkMode: boolean;
  };
  limits: {
    maxFileSize: number;
    maxUploads: number;
  };
}
