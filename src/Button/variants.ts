import { EButtonVariant, EButtonState } from './types'

export const sizes = {
    small: `
        font-size: var(--input-small);
        padding: calc(10 * var(--s)) calc(16 * var(--s));
        `,
    normal: `
        font-size: var(--input-normal);
        padding: calc(12 * var(--s)) calc(18 * var(--s));
    `,
    large: `
        font-size: var(--input-large);
        padding: calc(14 * var(--s)) calc(20 * var(--s));
    `
}

export const variants = {
    [EButtonVariant.PRIMARY]: {
        [EButtonState.DEFAULT]: `
            background: var(--color-gradient-0);
            color: var(--color-light);

            &:hover {
                background: var(--color-gradient-0-inverse);
            }
        `,
        [EButtonState.HOVER]: `
            color: var(--color-light);
            background: var(--color-gradient-0-inverse);
        `,
        [EButtonState.DISABLED]: `
            background: var(--color-gradient-0);
            color: var(--color-light);
            opacity: 0.4;
            pointer-events: none;
        `
    },
    [EButtonVariant.SECONDARY]: {
        [EButtonState.DEFAULT]: `
            background: var(--color-gradient-1);
            color: var(--color-light);

            &:hover {
                background: var(--color-gradient-1-inverse);
            }
        `,
        [EButtonState.HOVER]: `
            background: var(--color-gradient-1-inverse);
            color: var(--color-light);
        `,
        [EButtonState.DISABLED]: `
            background: var(--color-gradient-1);
            color: var(--color-light);
            opacity: 0.4;
            pointer-events: none;
        `
    },
    [EButtonVariant.TERTIARY]: {
        [EButtonState.DEFAULT]: `
            background: var(--color-gradient-2);
            color: var(--color-light);

            &:hover {
                background: var(--color-gradient-2-inverse);
            }
        `,
        [EButtonState.HOVER]: `
            background: var(--color-gradient-2-inverse);
            color: var(--color-light);
        `,
        [EButtonState.DISABLED]: `
            background: var(--color-gradient-2);
            color: var(--color-light);
            opacity: 0.4;
            pointer-events: none;
        `
    }
}
