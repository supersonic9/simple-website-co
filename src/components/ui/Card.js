import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import '../../styles/utilities.css';
export const Card = ({ children, title, subtitle, description, image, imageAlt, elevation = 'low', clickable = false, onClick, actions, footer, badge, badgeColor = 'blue', className = '', ...props }) => {
    // Base card classes
    const baseClasses = [
        'bg-white',
        'rounded-lg',
        'overflow-hidden',
        'transition-all',
        'duration-200',
    ];
    // Elevation classes
    const elevationClasses = {
        none: ['border', 'border-gray-200'],
        low: ['shadow-sm', 'border', 'border-gray-200'],
        medium: ['shadow', 'border', 'border-gray-200'],
        high: ['shadow-lg', 'border', 'border-gray-200'],
    };
    // Clickable classes
    const clickableClasses = clickable
        ? [
            'cursor-pointer',
            'hover:shadow-md',
            'hover:-translate-y-1',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-blue-500',
            'focus:ring-offset-2',
        ]
        : [];
    // Badge color classes
    const badgeColorClasses = {
        blue: 'bg-blue-100 text-blue-800',
        green: 'bg-green-100 text-green-800',
        coral: 'bg-red-100 text-red-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        purple: 'bg-purple-100 text-purple-800',
        teal: 'bg-teal-100 text-teal-800',
    };
    // Combine all classes
    const cardClasses = [
        ...baseClasses,
        ...elevationClasses[elevation],
        ...clickableClasses,
        className,
    ].join(' ');
    // Handle click
    const handleClick = () => {
        if (clickable && onClick) {
            onClick();
        }
    };
    // Handle key press for accessibility
    const handleKeyPress = (event) => {
        if (clickable && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            handleClick();
        }
    };
    return (_jsxs("div", { className: cardClasses, onClick: handleClick, onKeyPress: handleKeyPress, tabIndex: clickable ? 0 : undefined, role: clickable ? 'button' : undefined, ...props, children: [badge && (_jsx("div", { className: "p-4 pb-0", children: _jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColorClasses[badgeColor]}`, children: badge }) })), image && (_jsx("div", { className: "relative", children: _jsx("img", { src: image, alt: imageAlt || title || 'Card image', className: "w-full h-48 object-cover" }) })), _jsxs("div", { className: "p-6", children: [title && (_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: title })), subtitle && (_jsx("p", { className: "text-sm font-medium text-gray-600 mb-2", children: subtitle })), description && (_jsx("p", { className: "text-gray-700 mb-4", children: description })), children, actions && _jsx("div", { className: "mt-4", children: actions })] }), footer && (_jsx("div", { className: "px-6 py-4 bg-gray-50 border-t border-gray-200", children: footer }))] }));
};
//# sourceMappingURL=Card.js.map