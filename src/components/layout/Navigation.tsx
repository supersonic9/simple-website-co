import React from 'react';
import type { NavigationProps } from '@/types/components';

export const Navigation: React.FC<NavigationProps> = ({ items, ...props }) => {
  return (
    <nav {...props}>
      {items.map((item, index) => (
        <a key={index} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}; 