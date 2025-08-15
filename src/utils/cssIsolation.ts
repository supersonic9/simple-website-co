/**
 * CSS Isolation Utilities
 * Provides utilities for component CSS isolation and CSS modules
 */

// CSS Module naming convention
export const CSS_MODULE_NAMING = {
  pattern: '[name]__[local]___[hash:base64:5]',
  localsConvention: 'camelCase' as const,
} as const;

// Generate unique class names for components
export const generateClassName = (
  componentName: string,
  className: string,
  hash?: string
): string => {
  const baseName = `${componentName}__${className}`;
  return hash ? `${baseName}___${hash}` : baseName;
};

// CSS Module class name generator
export const createCSSModule = (componentName: string) => {
  return {
    // Generate scoped class names
    className: (baseClass: string) => generateClassName(componentName, baseClass),

    // Create modifier classes
    modifier: (baseClass: string, modifier: string) =>
      generateClassName(componentName, `${baseClass}--${modifier}`),

    // Create state classes
    state: (baseClass: string, state: string) =>
      generateClassName(componentName, `${baseClass}--${state}`),

    // Create responsive classes
    responsive: (baseClass: string, breakpoint: string) =>
      generateClassName(componentName, `${baseClass}--${breakpoint}`),
  };
};

// CSS isolation context for components
export const createCSSIsolation = (componentName: string) => {
  const cssModule = createCSSModule(componentName);

  return {
    // Main component class
    root: cssModule.className('root'),

    // Common component classes
    container: cssModule.className('container'),
    wrapper: cssModule.className('wrapper'),
    content: cssModule.className('content'),

    // State classes
    active: (baseClass: string) => cssModule.state(baseClass, 'active'),
    disabled: (baseClass: string) => cssModule.state(baseClass, 'disabled'),
    loading: (baseClass: string) => cssModule.state(baseClass, 'loading'),

    // Modifier classes
    primary: (baseClass: string) => cssModule.modifier(baseClass, 'primary'),
    secondary: (baseClass: string) => cssModule.modifier(baseClass, 'secondary'),
    large: (baseClass: string) => cssModule.modifier(baseClass, 'large'),
    small: (baseClass: string) => cssModule.modifier(baseClass, 'small'),

    // Responsive classes
    mobile: (baseClass: string) => cssModule.responsive(baseClass, 'mobile'),
    tablet: (baseClass: string) => cssModule.responsive(baseClass, 'tablet'),
    desktop: (baseClass: string) => cssModule.responsive(baseClass, 'desktop'),
  };
};

// Export types
export type CSSModule = ReturnType<typeof createCSSModule>;
export type CSSIsolation = ReturnType<typeof createCSSIsolation>;
