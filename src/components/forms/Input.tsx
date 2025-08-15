import React from 'react';
import type { InputProps } from '@/types/components';

export const Input: React.FC<InputProps> = ({ name, ...props }) => {
  return (
    <input name={name} {...props} />
  );
};
