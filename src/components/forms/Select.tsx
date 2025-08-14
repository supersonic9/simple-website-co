import React from 'react';
import type { SelectProps } from '@/types/components';

export const Select: React.FC<SelectProps> = ({ name, options, ...props }) => {
  return (
    <select name={name} {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
}; 