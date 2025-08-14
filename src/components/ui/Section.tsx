import React from 'react';
import type { SectionProps } from '@/types/components';
import '../styles/utilities.css';

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  backgroundColor = 'primary',
  padding = 'medium',
  margin = 'none',
  containerMaxWidth = 'desktop',
  align = 'left',
  fullWidth = false,
  sectionId,
  className = '',
  ...props
}) => {
  // Base section classes
  const baseClasses = ['relative'];

  // Background color classes
  const backgroundColorClasses = {
    primary: 'bg-gray-50',
    secondary: 'bg-white',
    'accent-blue': 'bg-blue-50',
    'accent-green': 'bg-green-50',
    'accent-coral': 'bg-red-50',
    'accent-yellow': 'bg-yellow-50',
    'accent-purple': 'bg-purple-50',
    'accent-teal': 'bg-teal-50',
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    small: 'py-8',
    medium: 'py-12',
    large: 'py-16',
    xlarge: 'py-24',
  };

  // Margin classes
  const marginClasses = {
    none: '',
    small: 'my-8',
    medium: 'my-12',
    large: 'my-16',
    xlarge: 'my-24',
  };

  // Container max width classes
  const containerMaxWidthClasses = {
    mobile: 'max-w-sm',
    tablet: 'max-w-4xl',
    desktop: 'max-w-6xl',
    full: 'max-w-full',
  };

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Width classes
  const widthClasses = fullWidth ? ['w-full'] : [];

  // Combine all classes
  const sectionClasses = [
    ...baseClasses,
    backgroundColorClasses[backgroundColor],
    paddingClasses[padding],
    marginClasses[margin],
    ...widthClasses,
    className,
  ].join(' ');

  const containerClasses = [
    'mx-auto',
    'px-4',
    containerMaxWidthClasses[containerMaxWidth],
    alignmentClasses[align],
  ].join(' ');

  return (
    <section
      id={sectionId}
      className={sectionClasses}
      {...props}
    >
      <div className={containerClasses}>
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="mb-8">
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
}; 