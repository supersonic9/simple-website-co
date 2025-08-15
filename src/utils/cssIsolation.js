/**
 * CSS Isolation Utilities
 * Provides utilities for component CSS isolation and CSS modules
 */
// CSS Module naming convention
export const CSS_MODULE_NAMING = {
    pattern: '[name]__[local]___[hash:base64:5]',
    localsConvention: 'camelCase',
};
// Generate unique class names for components
export const generateClassName = (componentName, className, hash) => {
    const baseName = `${componentName}__${className}`;
    return hash ? `${baseName}___${hash}` : baseName;
};
// CSS Module class name generator
export const createCSSModule = (componentName) => {
    return {
        // Generate scoped class names
        className: (baseClass) => generateClassName(componentName, baseClass),
        // Create modifier classes
        modifier: (baseClass, modifier) => generateClassName(componentName, `${baseClass}--${modifier}`),
        // Create state classes
        state: (baseClass, state) => generateClassName(componentName, `${baseClass}--${state}`),
        // Create responsive classes
        responsive: (baseClass, breakpoint) => generateClassName(componentName, `${baseClass}--${breakpoint}`),
    };
};
// CSS isolation context for components
export const createCSSIsolation = (componentName) => {
    const cssModule = createCSSModule(componentName);
    return {
        // Main component class
        root: cssModule.className('root'),
        // Common component classes
        container: cssModule.className('container'),
        wrapper: cssModule.className('wrapper'),
        content: cssModule.className('content'),
        // State classes
        active: (baseClass) => cssModule.state(baseClass, 'active'),
        disabled: (baseClass) => cssModule.state(baseClass, 'disabled'),
        loading: (baseClass) => cssModule.state(baseClass, 'loading'),
        // Modifier classes
        primary: (baseClass) => cssModule.modifier(baseClass, 'primary'),
        secondary: (baseClass) => cssModule.modifier(baseClass, 'secondary'),
        large: (baseClass) => cssModule.modifier(baseClass, 'large'),
        small: (baseClass) => cssModule.modifier(baseClass, 'small'),
        // Responsive classes
        mobile: (baseClass) => cssModule.responsive(baseClass, 'mobile'),
        tablet: (baseClass) => cssModule.responsive(baseClass, 'tablet'),
        desktop: (baseClass) => cssModule.responsive(baseClass, 'desktop'),
    };
};
//# sourceMappingURL=cssIsolation.js.map