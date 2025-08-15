// CSS Modules and isolation configuration
export const cssConfig = {
  modules: {
    localsConvention: 'camelCase' as const,
    generateScopedName: '[name]__[local]___[hash:base64:5]',
  },
  postcss: './postcss.config.js',
  devSourcemap: true,
};

// CSS isolation utilities
export const cssIsolationUtils = {
  // Generate unique class names for components
  generateClassName: (componentName: string, className: string) =>
    `${componentName}__${className}`,

  // CSS module naming convention
  moduleNaming: {
    pattern: '[name]__[local]___[hash:base64:5]',
    localsConvention: 'camelCase',
  },
};
