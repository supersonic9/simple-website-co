import type { ReactNode } from 'react';
export interface BaseComponentProps {
    /** CSS class name for additional styling */
    className?: string;
    /** Unique identifier for the component */
    id?: string;
    /** Children elements */
    children?: ReactNode;
    /** Additional HTML attributes */
    [key: string]: any;
}
export interface StyledComponentProps extends BaseComponentProps {
    /** Variant of the component */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** Size of the component */
    size?: 'small' | 'medium' | 'large';
    /** Whether the component is disabled */
    disabled?: boolean;
}
export interface LinkProps extends BaseComponentProps {
    /** Link URL */
    href: string;
    /** Whether link is external */
    external?: boolean;
    /** Link target */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** Link rel attribute */
    rel?: string;
    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Link text */
    children: ReactNode;
}
export interface IconProps extends BaseComponentProps {
    /** Icon name or component */
    name?: string;
    /** Icon size */
    size?: 'small' | 'medium' | 'large';
    /** Icon color */
    color?: string;
    /** Icon stroke width */
    strokeWidth?: number;
    /** Icon fill */
    fill?: 'none' | 'currentColor';
}
export interface LoadingProps extends BaseComponentProps {
    /** Loading size */
    size?: 'small' | 'medium' | 'large';
    /** Loading color */
    color?: string;
    /** Loading text */
    text?: string;
    /** Whether to show text */
    showText?: boolean;
}
export interface DividerProps extends BaseComponentProps {
    /** Divider orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Divider color */
    color?: string;
    /** Divider size */
    size?: 'thin' | 'medium' | 'thick';
    /** Divider spacing */
    spacing?: 'none' | 'small' | 'medium' | 'large';
}
export interface ButtonProps extends StyledComponentProps {
    /** Button type */
    type?: 'button' | 'submit' | 'reset';
    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Form association */
    form?: string;
    /** Loading state */
    loading?: boolean;
    /** Icon to display before text */
    icon?: ReactNode;
    /** Icon to display after text */
    iconAfter?: ReactNode;
    /** Full width button */
    fullWidth?: boolean;
    /** Button text */
    children: ReactNode;
}
export interface CardProps extends BaseComponentProps {
    /** Card title */
    title?: string;
    /** Card subtitle */
    subtitle?: string;
    /** Card description */
    description?: string;
    /** Card image URL */
    image?: string;
    /** Image alt text */
    imageAlt?: string;
    /** Card elevation level */
    elevation?: 'none' | 'low' | 'medium' | 'high';
    /** Whether card is clickable */
    clickable?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Card actions */
    actions?: ReactNode;
    /** Card footer */
    footer?: ReactNode;
    /** Card badge */
    badge?: string;
    /** Badge color */
    badgeColor?: 'blue' | 'green' | 'coral' | 'yellow' | 'purple' | 'teal';
}
export interface SectionProps extends BaseComponentProps {
    /** Section title */
    title?: string;
    /** Section subtitle */
    subtitle?: string;
    /** Section background color */
    backgroundColor?: 'primary' | 'secondary' | 'accent-blue' | 'accent-green' | 'accent-coral' | 'accent-yellow' | 'accent-purple' | 'accent-teal';
    /** Section padding */
    padding?: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
    /** Section margin */
    margin?: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
    /** Container max width */
    containerMaxWidth?: 'mobile' | 'tablet' | 'desktop' | 'full';
    /** Section alignment */
    align?: 'left' | 'center' | 'right';
    /** Full width section */
    fullWidth?: boolean;
    /** Section ID for navigation */
    sectionId?: string;
}
export interface ContainerProps extends BaseComponentProps {
    /** Container max width */
    maxWidth?: 'mobile' | 'tablet' | 'desktop' | 'full';
    /** Container padding */
    padding?: 'none' | 'small' | 'medium' | 'large';
    /** Container alignment */
    align?: 'left' | 'center' | 'right';
    /** Full width container */
    fullWidth?: boolean;
}
export interface GridProps extends BaseComponentProps {
    /** Number of columns */
    columns?: 1 | 2 | 3 | 4 | 6 | 12;
    /** Grid gap */
    gap?: 'none' | 'small' | 'medium' | 'large';
    /** Grid alignment */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /** Grid justify */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    /** Responsive columns */
    responsive?: {
        mobile?: 1 | 2;
        tablet?: 1 | 2 | 3 | 4;
        desktop?: 1 | 2 | 3 | 4 | 6 | 12;
    };
}
export interface GridItemProps extends BaseComponentProps {
    /** Column span */
    span?: 1 | 2 | 3 | 4 | 6 | 12;
    /** Row span */
    rowSpan?: 1 | 2 | 3 | 4;
    /** Grid item alignment */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /** Grid item justify */
    justify?: 'start' | 'center' | 'end' | 'stretch';
    /** Responsive span */
    responsive?: {
        mobile?: 1 | 2;
        tablet?: 1 | 2 | 3 | 4;
        desktop?: 1 | 2 | 3 | 4 | 6 | 12;
    };
}
export interface NavigationItem {
    /** Navigation item label */
    label: string;
    /** Navigation item URL */
    href: string;
    /** Whether item is active */
    active?: boolean;
    /** Whether item is external */
    external?: boolean;
    /** Navigation item icon */
    icon?: ReactNode;
    /** Sub-navigation items */
    children?: NavigationItem[];
}
export interface NavigationProps extends BaseComponentProps {
    /** Navigation items */
    items: NavigationItem[];
    /** Logo component */
    logo?: ReactNode;
    /** Whether navigation is sticky */
    sticky?: boolean;
    /** Navigation variant */
    variant?: 'default' | 'transparent' | 'solid';
    /** Mobile menu state */
    mobileMenuOpen?: boolean;
    /** Mobile menu toggle handler */
    onMobileMenuToggle?: (open: boolean) => void;
}
export interface InputProps extends BaseComponentProps {
    /** Input type */
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    /** Input value */
    value?: string;
    /** Input placeholder */
    placeholder?: string;
    /** Input label */
    label?: string;
    /** Input name */
    name: string;
    /** Input required */
    required?: boolean;
    /** Input disabled */
    disabled?: boolean;
    /** Input read only */
    readOnly?: boolean;
    /** Input error message */
    error?: string;
    /** Input helper text */
    helperText?: string;
    /** Input change handler */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Input blur handler */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** Input focus handler */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
export interface TextareaProps extends BaseComponentProps {
    /** Textarea value */
    value?: string;
    /** Textarea placeholder */
    placeholder?: string;
    /** Textarea label */
    label?: string;
    /** Textarea name */
    name: string;
    /** Textarea rows */
    rows?: number;
    /** Textarea required */
    required?: boolean;
    /** Textarea disabled */
    disabled?: boolean;
    /** Textarea read only */
    readOnly?: boolean;
    /** Textarea error message */
    error?: string;
    /** Textarea helper text */
    helperText?: string;
    /** Textarea change handler */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** Textarea blur handler */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** Textarea focus handler */
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}
export interface SelectProps extends BaseComponentProps {
    /** Select value */
    value?: string;
    /** Select label */
    label?: string;
    /** Select name */
    name: string;
    /** Select options */
    options: SelectOption[];
    /** Select placeholder */
    placeholder?: string;
    /** Select required */
    required?: boolean;
    /** Select disabled */
    disabled?: boolean;
    /** Select error message */
    error?: string;
    /** Select helper text */
    helperText?: string;
    /** Select change handler */
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    /** Select blur handler */
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    /** Select focus handler */
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}
export interface SelectOption {
    /** Option value */
    value: string;
    /** Option label */
    label: string;
    /** Option disabled */
    disabled?: boolean;
}
export interface ImageProps extends BaseComponentProps {
    /** Image source */
    src: string;
    /** Image alt text */
    alt: string;
    /** Image width */
    width?: number | string;
    /** Image height */
    height?: number | string;
    /** Image loading */
    loading?: 'lazy' | 'eager';
    /** Image object fit */
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    /** Image object position */
    objectPosition?: string;
    /** Image aspect ratio */
    aspectRatio?: 'square' | 'video' | 'wide' | 'ultrawide' | 'custom';
    /** Custom aspect ratio */
    customAspectRatio?: string;
    /** Image caption */
    caption?: string;
    /** Image click handler */
    onClick?: () => void;
    /** Whether image is clickable */
    clickable?: boolean;
}
export interface AlertProps extends BaseComponentProps {
    /** Alert type */
    type: 'success' | 'warning' | 'error' | 'info';
    /** Alert title */
    title?: string;
    /** Alert message */
    message: string;
    /** Alert dismissible */
    dismissible?: boolean;
    /** Alert dismiss handler */
    onDismiss?: () => void;
    /** Alert icon */
    icon?: ReactNode;
}
export interface BadgeProps extends BaseComponentProps {
    /** Badge text */
    children: ReactNode;
    /** Badge variant */
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    /** Badge size */
    size?: 'small' | 'medium' | 'large';
    /** Badge color */
    color?: 'blue' | 'green' | 'coral' | 'yellow' | 'purple' | 'teal';
}
export type ColorVariant = 'blue' | 'green' | 'coral' | 'yellow' | 'purple' | 'teal';
export type SizeVariant = 'small' | 'medium' | 'large';
export type SpacingVariant = 'none' | 'small' | 'medium' | 'large' | 'xlarge';
export type AlignmentVariant = 'left' | 'center' | 'right';
export type FlexAlignmentVariant = 'start' | 'center' | 'end' | 'stretch';
export type FlexJustifyVariant = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
export type FocusHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type BlurHandler = (event: React.FocusEvent<HTMLElement>) => void;
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
//# sourceMappingURL=components.d.ts.map