import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import '../../styles/utilities.css';
import '../../styles/grid.css';
import '../../styles/layout.css';
export const Layout = ({ children, maxWidth = 'lg', padding = 'medium', centered = true, background = 'transparent', className = '', ...props }) => {
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
    return (_jsx("div", { className: layoutClasses, ...props, children: children }));
};
export const Container = ({ children, size = 'lg', padding = 'medium', centered = true, className = '', ...props }) => {
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
    return (_jsx("div", { className: containerClasses, ...props, children: children }));
};
export const Wrapper = ({ children, padding = 'medium', background = 'transparent', constrained = true, containerSize = 'lg', className = '', ...props }) => {
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
    return (_jsx("section", { className: wrapperClasses, ...props, children: constrained ? (_jsx(Container, { size: containerSize, centered: true, children: children })) : (children) }));
};
//# sourceMappingURL=Layout.js.map