import React from 'react';
import type { AlertProps } from '@/types/components';

export const Alert: React.FC<AlertProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
