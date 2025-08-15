import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Card, Section } from './ui';
import { Container } from './layout';
/**
 * Accessibility Test Component
 * Tests all design tokens for WCAG AA compliance
 */
export const AccessibilityTest = () => {
    // Color combinations to test for WCAG AA compliance
    const colorCombinations = [
        {
            name: 'Primary Text on Background',
            foreground: '#2C2C2C',
            background: '#F5F1ED',
            expectedRatio: 4.5,
        },
        {
            name: 'Secondary Text on Background',
            foreground: '#6B6B6B',
            background: '#F5F1ED',
            expectedRatio: 4.5,
        },
        {
            name: 'Primary Text on White',
            foreground: '#2C2C2C',
            background: '#FFFFFF',
            expectedRatio: 4.5,
        },
        {
            name: 'Secondary Text on White',
            foreground: '#6B6B6B',
            background: '#FFFFFF',
            expectedRatio: 4.5,
        },
        {
            name: 'White Text on Primary Button',
            foreground: '#FFFFFF',
            background: '#2C2C2C',
            expectedRatio: 4.5,
        },
        {
            name: 'Primary Text on Secondary Button',
            foreground: '#2C2C2C',
            background: 'transparent',
            expectedRatio: 4.5,
        },
        {
            name: 'Text on Blue Accent',
            foreground: '#FFFFFF',
            background: '#7BA7D9',
            expectedRatio: 4.5,
        },
        {
            name: 'Text on Green Accent',
            foreground: '#FFFFFF',
            background: '#8FA687',
            expectedRatio: 4.5,
        },
        {
            name: 'Text on Coral Accent',
            foreground: '#FFFFFF',
            background: '#E89B8B',
            expectedRatio: 4.5,
        },
    ];
    // Calculate relative luminance for a color
    const getRelativeLuminance = (color) => {
        // Handle transparent/alpha colors
        if (color === 'transparent')
            return 1;
        // Convert hex to RGB
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16) / 255;
        const g = parseInt(hex.substr(2, 2), 16) / 255;
        const b = parseInt(hex.substr(4, 2), 16) / 255;
        // Apply gamma correction
        const rL = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        const gL = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        const bL = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
        return 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;
    };
    // Calculate contrast ratio
    const getContrastRatio = (foreground, background) => {
        const fgL = getRelativeLuminance(foreground);
        const bgL = getRelativeLuminance(background);
        const lighter = Math.max(fgL, bgL);
        const darker = Math.min(fgL, bgL);
        return (lighter + 0.05) / (darker + 0.05);
    };
    // Test accessibility compliance
    const testAccessibility = () => {
        const results = colorCombinations.map(combo => {
            const ratio = getContrastRatio(combo.foreground, combo.background);
            const passes = ratio >= combo.expectedRatio;
            return {
                ...combo,
                actualRatio: ratio.toFixed(2),
                passes,
                status: passes ? '✅ PASS' : '❌ FAIL',
            };
        });
        return results;
    };
    const accessibilityResults = testAccessibility();
    const passedTests = accessibilityResults.filter(r => r.passes).length;
    const totalTests = accessibilityResults.length;
    return (_jsx("div", { className: "accessibility-test", children: _jsx(Section, { className: "accessibility-test-section", children: _jsx(Container, { size: "lg", centered: true, children: _jsxs("div", { className: "flex flex-col items-center justify-center w-full", children: [_jsx("h2", { className: "text-heading2 text-center mb-8", children: "\uD83C\uDFAF Design Token Accessibility Test" }), _jsx("p", { className: "text-body text-center mb-8", children: "Testing all color combinations for WCAG AA compliance (4.5:1 minimum contrast ratio)" }), _jsxs(Card, { padding: "large", background: "primary", className: "mb-8 w-full max-w-4xl", children: [_jsx("h3", { className: "text-heading3 mb-4 text-center", children: "Test Results Summary" }), _jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "text-2xl font-bold mb-2", children: [passedTests, "/", totalTests, " Tests Passed"] }), _jsx("div", { className: `text-lg ${passedTests === totalTests ? 'text-green-600' : 'text-red-600'}`, children: passedTests === totalTests ? '🎉 All Tests Passed!' : '⚠️ Some Tests Failed' })] })] }), _jsxs("div", { className: "w-full max-w-4xl", children: [_jsx("h3", { className: "text-heading3 mb-4 text-center", children: "Detailed Test Results" }), accessibilityResults.map((result, index) => (_jsx(Card, { padding: "medium", background: "secondary", className: `mb-4 ${result.passes ? 'border-green-200' : 'border-red-200'}`, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium mb-2", children: result.name }), _jsxs("div", { className: "text-sm text-gray-600", children: [_jsx("span", { className: "inline-block w-4 h-4 rounded mr-2", style: { backgroundColor: result.foreground === 'transparent' ? '#f0f0f0' : result.foreground } }), result.foreground === 'transparent' ? 'transparent' : result.foreground, " on", _jsx("span", { className: "inline-block w-4 h-4 rounded ml-2", style: { backgroundColor: result.background } }), result.background] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-lg font-bold", children: [result.actualRatio, ":1"] }), _jsx("div", { className: `text-sm ${result.passes ? 'text-green-600' : 'text-red-600'}`, children: result.status })] })] }) }, index)))] }), _jsxs(Card, { padding: "large", background: "secondary", className: "mt-8 w-full max-w-4xl", children: [_jsx("h3", { className: "text-heading3 mb-4 text-center", children: "WCAG AA Guidelines" }), _jsxs("div", { className: "text-sm space-y-2", children: [_jsxs("p", { children: [_jsx("strong", { children: "Normal Text:" }), " Minimum contrast ratio of 4.5:1"] }), _jsxs("p", { children: [_jsx("strong", { children: "Large Text (18pt+ or 14pt+ bold):" }), " Minimum contrast ratio of 3:1"] }), _jsxs("p", { children: [_jsx("strong", { children: "UI Components:" }), " Minimum contrast ratio of 3:1"] }), _jsxs("p", { children: [_jsx("strong", { children: "Focus Indicators:" }), " Must be clearly visible"] }), _jsxs("p", { children: [_jsx("strong", { children: "Touch Targets:" }), " Minimum 44px \u00D7 44px"] })] })] })] }) }) }) }));
};
//# sourceMappingURL=AccessibilityTest.js.map