import React from 'react';
import type { TextareaProps } from '@/types/components';

export const Textarea: React.FC<TextareaProps> = ({ name, ...props }) => {
  return (
    <textarea name={name} {...props} />
  );
};
