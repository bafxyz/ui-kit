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

export enum EButtonScheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface IButtonProps {
    fit?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    nowrap?: boolean
    radius?: EButtonRadius | string
    round?: boolean
    scheme?: EButtonScheme
    size?: EButtonSize
    state?: EButtonState
    textTransform?: EButtonTextTransform
}

export default interface IButton extends HTMLButtonElement {
    SCHEME: typeof EButtonScheme
    SIZE: typeof EButtonSize
    STATE: typeof EButtonState
    RADIUS: typeof EButtonRadius
    TEXT_TRANSFORM: typeof EButtonTextTransform
}
