/**
 * CSS Isolation Utilities
 * Provides utilities for component CSS isolation and CSS modules
 */
export declare const CSS_MODULE_NAMING: {
    readonly pattern: "[name]__[local]___[hash:base64:5]";
    readonly localsConvention: "camelCase";
};
export declare const generateClassName: (componentName: string, className: string, hash?: string) => string;
export declare const createCSSModule: (componentName: string) => {
    className: (baseClass: string) => string;
    modifier: (baseClass: string, modifier: string) => string;
    state: (baseClass: string, state: string) => string;
    responsive: (baseClass: string, breakpoint: string) => string;
};
export declare const createCSSIsolation: (componentName: string) => {
    root: string;
    container: string;
    wrapper: string;
    content: string;
    active: (baseClass: string) => string;
    disabled: (baseClass: string) => string;
    loading: (baseClass: string) => string;
    primary: (baseClass: string) => string;
    secondary: (baseClass: string) => string;
    large: (baseClass: string) => string;
    small: (baseClass: string) => string;
    mobile: (baseClass: string) => string;
    tablet: (baseClass: string) => string;
    desktop: (baseClass: string) => string;
};
export type CSSModule = ReturnType<typeof createCSSModule>;
export type CSSIsolation = ReturnType<typeof createCSSIsolation>;
//# sourceMappingURL=cssIsolation.d.ts.map