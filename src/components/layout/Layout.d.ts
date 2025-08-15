import React from 'react';
import type { BaseComponentProps } from '@/types/components';
import '../../styles/utilities.css';
import '../../styles/grid.css';
import '../../styles/layout.css';
interface LayoutProps extends BaseComponentProps {
    /** Maximum width of the container */
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Container padding */
    padding?: 'none' | 'small' | 'medium' | 'large';
    /** Whether to center the container */
    centered?: boolean;
    /** Background color variant */
    background?: 'primary' | 'secondary' | 'accent' | 'transparent';
    /** Additional CSS classes */
    className?: string;
}
export declare const Layout: React.FC<LayoutProps>;
interface ContainerProps extends BaseComponentProps {
    /** Container size variant */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Container padding */
    padding?: 'none' | 'small' | 'medium' | 'large';
    /** Whether to center the container */
    centered?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const Container: React.FC<ContainerProps>;
interface WrapperProps extends BaseComponentProps {
    /** Section padding */
    padding?: 'none' | 'small' | 'medium' | 'large' | 'xl';
    /** Background color variant */
    background?: 'primary' | 'secondary' | 'accent' | 'transparent';
    /** Whether to use container constraints */
    constrained?: boolean;
    /** Container size when constrained */
    containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Additional CSS classes */
    className?: string;
}
export declare const Wrapper: React.FC<WrapperProps>;
export {};
//# sourceMappingURL=Layout.d.ts.map