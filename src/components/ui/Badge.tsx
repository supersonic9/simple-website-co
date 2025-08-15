import React from 'react';
import type { BadgeProps } from '@/types/components';

export const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <span {...props}>
      {children}
    </span>
  );
};
