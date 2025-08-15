import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import '../../styles/utilities.css';
import '../../styles/grid.css';
export const Grid = ({ children, columns = 12, gap = 'medium', align = 'stretch', justify = 'start', responsive, className = '', ...props }) => {
    // Base grid classes
    const baseClasses = ['grid'];
    // Gap classes
    const gapClasses = {
        none: 'gap-0',
        small: 'gap-4',
        medium: 'gap-6',
        large: 'gap-8',
    };
    // Alignment classes
    const alignClasses = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
    };
    // Justify classes
    const justifyClasses = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
    };
    // Responsive column classes
    const getResponsiveColumns = () => {
        const classes = [];
        // Default columns
        classes.push(`grid-cols-${columns}`);
        // Responsive columns
        if (responsive) {
            if (responsive.mobile) {
                classes.push(`sm:grid-cols-${responsive.mobile}`);
            }
            if (responsive.tablet) {
                classes.push(`md:grid-cols-${responsive.tablet}`);
            }
            if (responsive.desktop) {
                classes.push(`lg:grid-cols-${responsive.desktop}`);
            }
        }
        return classes;
    };
    // Combine all classes
    const gridClasses = [
        ...baseClasses,
        ...getResponsiveColumns(),
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        className,
    ].join(' ');
    return (_jsx("div", { className: gridClasses, ...props, children: children }));
};
export const GridItem = ({ children, span = 1, rowSpan = 1, align = 'stretch', justify = 'start', responsive, className = '', ...props }) => {
    // Base grid item classes
    const baseClasses = ['flex', 'flex-col'];
    // Alignment classes
    const alignClasses = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
    };
    // Justify classes
    const justifyClasses = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        stretch: 'justify-stretch',
    };
    // Responsive span classes
    const getResponsiveSpan = () => {
        const classes = [];
        // Default span
        classes.push(`col-span-${span}`);
        // Row span
        if (rowSpan > 1) {
            classes.push(`row-span-${rowSpan}`);
        }
        // Responsive span
        if (responsive) {
            if (responsive.mobile) {
                classes.push(`sm:col-span-${responsive.mobile}`);
            }
            if (responsive.tablet) {
                classes.push(`md:col-span-${responsive.tablet}`);
            }
            if (responsive.desktop) {
                classes.push(`lg:col-span-${responsive.desktop}`);
            }
        }
        return classes;
    };
    // Combine all classes
    const itemClasses = [
        ...baseClasses,
        ...getResponsiveSpan(),
        alignClasses[align],
        justifyClasses[justify],
        className,
    ].join(' ');
    return (_jsx("div", { className: itemClasses, ...props, children: children }));
};
//# sourceMappingURL=Grid.js.map