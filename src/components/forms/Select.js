import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const Select = ({ name, options, ...props }) => {
    return (_jsx("select", { name: name, ...props, children: options.map((option, index) => (_jsx("option", { value: option.value, disabled: option.disabled, children: option.label }, index))) }));
};
//# sourceMappingURL=Select.js.map