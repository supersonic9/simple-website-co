import React from 'react';
import type { ButtonProps } from '@/types/components';
import '../styles/utilities.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconAfter,
  className = '',
  onClick,
  ...props
}) => {
  // Base button classes
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'border',
    'border-transparent',
    'rounded',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
  ];

  // Size classes
  const sizeClasses = {
    small: ['text-sm', 'px-3', 'py-2', 'min-h-8'],
    medium: ['text-base', 'px-6', 'py-3', 'min-h-12'],
    large: ['text-lg', 'px-8', 'py-4', 'min-h-14'],
  };

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-gray-900',
      'text-white',
      'hover:bg-gray-800',
      'focus:ring-blue-500',
      'active:bg-gray-700',
    ],
    secondary: [
      'bg-white',
      'text-gray-900',
      'border-gray-300',
      'hover:bg-gray-50',
      'focus:ring-blue-500',
      'active:bg-gray-100',
    ],
    outline: [
      'bg-transparent',
      'text-gray-900',
      'border-gray-300',
      'hover:bg-gray-50',
      'focus:ring-blue-500',
      'active:bg-gray-100',
    ],
    ghost: [
      'bg-transparent',
      'text-gray-900',
      'hover:bg-gray-100',
      'focus:ring-blue-500',
      'active:bg-gray-200',
    ],
  };

  // Width classes
  const widthClasses = fullWidth ? ['w-full'] : [];

  // Combine all classes
  const buttonClasses = [
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses[variant],
    ...widthClasses,
    className,
  ].join(' ');

  // Handle click with loading state
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={buttonClasses}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {!loading && iconAfter && <span className="ml-2">{iconAfter}</span>}
    </button>
  );
}; 