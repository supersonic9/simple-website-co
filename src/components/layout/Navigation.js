import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const Navigation = ({ items, ...props }) => {
    return (_jsx("nav", { ...props, children: items.map((item, index) => (_jsx("a", { href: item.href, children: item.label }, index))) }));
};
//# sourceMappingURL=Navigation.js.map