/**
 * Application constants and configuration values
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

// Application Configuration
export const APP_CONFIG = {
  NAME: 'Dashboard',
  VERSION: '1.0.0',
  DESCRIPTION: 'Restaurant management dashboard',
  SUPPORT_EMAIL: 'support@example.com',
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_UPLOADS: 10,
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  DEFAULT_THEME: 'light' as const,
  STORAGE_KEY: 'dashboard-theme',
  TRANSITION_DURATION: 200, // milliseconds
} as const;

// Navigation Configuration
export const NAV_CONFIG = {
  SIDEBAR_WIDTH: 256, // pixels
  HEADER_HEIGHT: 64, // pixels
  MOBILE_BREAKPOINT: 768, // pixels
} as const;

// Chart Configuration
export const CHART_CONFIG = {
  COLORS: {
    PRIMARY: '#3b82f6',
    SECONDARY: '#10b981',
    TERTIARY: '#f59e0b',
    DANGER: '#ef4444',
    WARNING: '#f59e0b',
    SUCCESS: '#10b981',
    INFO: '#06b6d4',
    GRAY: '#6b7280',
  },
  DEFAULT_HEIGHT: 300,
  DEFAULT_WIDTH: 400,
  ANIMATION_DURATION: 300,
} as const;

// Form Configuration
export const FORM_CONFIG = {
  DEBOUNCE_DELAY: 300, // milliseconds
  VALIDATION_DELAY: 500, // milliseconds
  MAX_FIELD_LENGTH: 255,
  MIN_PASSWORD_LENGTH: 8,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'dashboard-theme',
  USER_PREFERENCES: 'dashboard-user-preferences',
  DASHBOARD_STATE: 'dashboard-state',
  CACHE_PREFIX: 'dashboard-cache-',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  TIMEOUT: 'Request timed out. Please try again.',
  UNKNOWN: 'An unexpected error occurred.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  SAVED: 'Changes saved successfully.',
  CREATED: 'Item created successfully.',
  UPDATED: 'Item updated successfully.',
  DELETED: 'Item deleted successfully.',
  COPIED: 'Copied to clipboard.',
  UPLOADED: 'File uploaded successfully.',
} as const;

// Validation Rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
} as const;

// Date and Time Formats
export const DATE_FORMATS = {
  SHORT: 'MMM dd, yyyy',
  LONG: 'MMMM dd, yyyy',
  TIME: 'HH:mm',
  DATETIME: 'MMM dd, yyyy HH:mm',
  ISO: 'yyyy-MM-dd',
  DISPLAY: 'MMM dd, yyyy HH:mm',
} as const;

// Pagination Configuration
export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 25, 50, 100],
  MAX_PAGE_SIZE: 100,
  SHOW_SIZE_CHANGER: true,
  SHOW_QUICK_JUMPER: true,
} as const;

// Feature Flags
export const FEATURES = {
  ANALYTICS: process.env.NEXT_PUBLIC_FEATURE_ANALYTICS === 'true',
  NOTIFICATIONS: process.env.NEXT_PUBLIC_FEATURE_NOTIFICATIONS === 'true',
  DARK_MODE: process.env.NEXT_PUBLIC_FEATURE_DARK_MODE === 'true',
  EXPORT: process.env.NEXT_PUBLIC_FEATURE_EXPORT === 'true',
  IMPORT: process.env.NEXT_PUBLIC_FEATURE_IMPORT === 'true',
} as const;

// Environment Configuration
export const ENV = {
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_TEST: process.env.NODE_ENV === 'test',
} as const;

// Performance Configuration
export const PERFORMANCE_CONFIG = {
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 1000,
  LAZY_LOAD_THRESHOLD: 0.1,
  VIRTUAL_SCROLL_THRESHOLD: 100,
} as const;
