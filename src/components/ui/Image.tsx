import React from 'react';
import type { ImageProps } from '@/types/components';

export const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return (
    <img src={src} alt={alt} {...props} />
  );
};
