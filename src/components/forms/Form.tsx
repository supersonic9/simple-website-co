import React from 'react';
import type { BaseComponentProps } from '@/types/components';

export const Form: React.FC<BaseComponentProps> = ({ children, ...props }) => {
  return (
    <form {...props}>
      {children}
    </form>
  );
}; 