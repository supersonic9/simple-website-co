import React from 'react';
import type { ContainerProps } from '@/types/components';

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
}; 