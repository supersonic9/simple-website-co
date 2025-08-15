import React from 'react';
import type { BaseComponentProps } from '@/types/components';

export const Footer: React.FC<BaseComponentProps> = ({ children }) => {
  return (
    <footer>
      {children}
    </footer>
  );
};
