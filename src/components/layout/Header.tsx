import React from 'react';
import type { BaseComponentProps } from '@/types/components';

export const Header: React.FC<BaseComponentProps> = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
};
