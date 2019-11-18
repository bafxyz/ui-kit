export enum EButtonSize {
    SMALL = 'small',
    NORMAL = 'normal',
    LARGE = 'large'
}

export enum EButtonRadius {
    NONE = '',
    DEFAULT = 'calc(4 * var(--s))',
    ROUND = 'calc(500 * var(--s))'
}

export enum EButtonState {
    DEFAULT = 'default',
    HOVER = 'hover',
    DISABLED = 'disabled'
}

export enum EButtonTextTransform {
    NONE = 'none',
    UPPERCASE = 'uppercase'
}

export enum EButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary'
}

export interface IButtonProps {
    fit?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    nowrap?: boolean
    radius?: EButtonRadius | string
    round?: boolean
    size?: EButtonSize
    state?: EButtonState
    textTransform?: EButtonTextTransform
    variant?: EButtonVariant
}

export default interface IButton extends HTMLButtonElement {
    VARIANT: typeof EButtonVariant
    SIZE: typeof EButtonSize
    STATE: typeof EButtonState
    RADIUS: typeof EButtonRadius
    TEXT_TRANSFORM: typeof EButtonTextTransform
}
