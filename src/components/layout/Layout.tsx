import React from 'react';
import type { BaseComponentProps } from '@/types/components';
import '../../styles/utilities.css';
import '../../styles/grid.css';
import '../../styles/layout.css';

interface LayoutProps extends BaseComponentProps {
  /** Maximum width of the container */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Container padding */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /** Whether to center the container */
  centered?: boolean;
  /** Background color variant */
  background?: 'primary' | 'secondary' | 'accent' | 'transparent';
  /** Additional CSS classes */
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  maxWidth = 'lg',
  padding = 'medium',
  centered = true,
  background = 'transparent',
  className = '',
  ...props
}) => {
  // Container max-width classes
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
  };

  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    small: 'px-4 py-6',
    medium: 'px-6 py-8',
    large: 'px-8 py-12',
  };

  // Background classes
  const backgroundClasses = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    accent: 'bg-accent-blue',
    transparent: 'bg-transparent',
  };

  // Responsive padding classes
  const responsivePaddingClasses = {
    none: '',
    small: 'md:px-6 lg:px-8',
    medium: 'md:px-8 lg:px-12',
    large: 'md:px-12 lg:px-16',
  };

  // Combine all classes
  const layoutClasses = [
    'w-full',
    maxWidthClasses[maxWidth],
    paddingClasses[padding],
    responsivePaddingClasses[padding],
    backgroundClasses[background],
    centered ? 'mx-auto' : '',
    className,
  ].join(' ').replace(/\s+/g, ' ').trim();

  return (
    <div className={layoutClasses} {...props}>
      {children}
    </div>
  );
};

// Container component for consistent content width
interface ContainerProps extends BaseComponentProps {
  /** Container size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Container padding */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /** Whether to center the container */
  centered?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  padding = 'medium',
  centered = true,
  className = '',
  ...props
}) => {
  // Container size classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
  };

  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    small: 'px-4',
    medium: 'px-6',
    large: 'px-8',
  };

  // Responsive padding classes
  const responsivePaddingClasses = {
    none: '',
    small: 'md:px-6',
    medium: 'md:px-8',
    large: 'md:px-12',
  };

  // Combine all classes
  const containerClasses = [
    'w-full',
    sizeClasses[size],
    paddingClasses[padding],
    responsivePaddingClasses[padding],
    centered ? 'mx-auto' : '',
    className,
  ].join(' ').replace(/\s+/g, ' ').trim();

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

// Wrapper component for page sections
interface WrapperProps extends BaseComponentProps {
  /** Section padding */
  padding?: 'none' | 'small' | 'medium' | 'large' | 'xl';
  /** Background color variant */
  background?: 'primary' | 'secondary' | 'accent' | 'transparent';
  /** Whether to use container constraints */
  constrained?: boolean;
  /** Container size when constrained */
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Additional CSS classes */
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  padding = 'medium',
  background = 'transparent',
  constrained = true,
  containerSize = 'lg',
  className = '',
  ...props
}) => {
  // Section padding classes
  const paddingClasses = {
    none: 'py-0',
    small: 'py-6',
    medium: 'py-8',
    large: 'py-12',
    xl: 'py-16',
  };

  // Background classes
  const backgroundClasses = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    accent: 'bg-accent-blue',
    transparent: 'bg-transparent',
  };

  // Responsive padding classes
  const responsivePaddingClasses = {
    none: '',
    small: 'md:py-8',
    medium: 'md:py-12',
    large: 'md:py-16',
    xl: 'md:py-20',
  };

  // Combine all classes
  const wrapperClasses = [
    'w-full',
    paddingClasses[padding],
    responsivePaddingClasses[padding],
    backgroundClasses[background],
    className,
  ].join(' ').replace(/\s+/g, ' ').trim();

  return (
    <section className={wrapperClasses} {...props}>
      {constrained ? (
        <Container size={containerSize} centered={true}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
};
