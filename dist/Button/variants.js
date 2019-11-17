"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.sizes = {
    'x-small': {
        x: 'calc(1 * var(--dim-gutter-base))',
        y: 'calc(10 * var(--s))'
    },
    small: {
        x: 'calc(3 * var(--dim-gutter-base))',
        y: 'calc(12 * var(--s))'
    },
    normal: {
        x: 'calc(4 * var(--dim-gutter-base))',
        y: 'calc(14 * var(--s))'
    },
    large: {
        x: 'calc(5 * var(--dim-gutter-base))',
        y: 'calc(18 * var(--s))'
    },
    'x-large': {
        x: 'calc(6 * var(--dim-gutter-base))',
        y: 'calc(20 * var(--s))'
    }
};
exports.schemes = {
    [types_1.EButtonScheme.PRIMARY]: {
        [types_1.EButtonVariant.GHOST]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-primary);
                color: var(--color-primary);

                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-primary);
                        color: var(--color-dark-2);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-primary);
                color: var(--color-dark-2)
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-primary);
                color: var(--color-primary);
            `
        },
        [types_1.EButtonVariant.FILL]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: var(--color-primary);
                border: calc(1 * var(--s)) solid var(--color-primary);
                color: var(--color-dark-2);

               ${!state
                ? `
                    &:hover {
                        background-color: var(--color-dark-2);
                        color: var(--color-primary);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-dark-2);
                color: var(--color-primary);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: var(--color-primary);
                border: calc(1 * var(--s)) solid var(--color-primary);
                color: var(--color-dark-2);
            `
        }
    },
    [types_1.EButtonScheme.SECONDARY]: {
        [types_1.EButtonVariant.GHOST]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-secondary);
                color: var(--color-secondary);

                ${!state
                ? `    
                    &:hover {
                        background-color: var(--color-secondary);
                        color: var(--color-light);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-secondary);
                color: var(--color-light);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-secondary);
                color: var(--color-secondary);
            `
        },
        [types_1.EButtonVariant.FILL]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: var(--color-secondary);
                border: calc(1 * var(--s)) solid var(--color-secondary);
                color: var(--color-light);

                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-secondary-3);
                        border: calc(1 * var(--s)) solid var(--color-secondary-3);
                        color: var(--color-light);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-secondary-3);
                border: calc(1 * var(--s)) solid var(--color-secondary-3);
                color: var(--color-light);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: var(--color-secondary);
                border: calc(1 * var(--s)) solid var(--color-secondary);
                color: var(--color-light);
            `
        }
    },
    [types_1.EButtonScheme.TERTIARY]: {
        [types_1.EButtonVariant.GHOST]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-tertiary);
                color: var(--color-tertiary);

                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-tertiary);
                        color: var(--color-light);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-tertiary);
                color: var(--color-light);
            `,
            [types_1.EButtonState.DISABLED]: `
                background- color: transparent;
                border: calc(1 * var(--s)) solid var(--color-tertiary);
                color: var(--color-tertiary);
            `
        },
        [types_1.EButtonVariant.FILL]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: var(--color-tertiary);
                border: calc(1 * var(--s)) solid var(--color-tertiary);
                color: var(--color-light);

                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-light);
                        color: var(--color-tertiary);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-light);
                color: var(--color-tertiary);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: var(--color-tertiary);
                border: calc(1 * var(--s)) solid var(--color-tertiary);
                color: var(--color-light);
            `
        }
    },
    [types_1.EButtonScheme.LIGHT]: {
        [types_1.EButtonVariant.GHOST]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-light);
                color: var(--color-light);

                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-light);
                        color: var(--color-dark-2);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-light);
                color: var(--color-dark-2);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-light);
                color: var(--color-light);
            `
        },
        [types_1.EButtonVariant.FILL]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: var(--color-light);
                border: calc(1 * var(--s)) solid var(--color-light);
                color: var(--color-dark-2);

                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-dark-2);
                        color: var(--color-light);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-dark-2);
                color: var(--color-light);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: var(--color-light);
                border: calc(1 * var(--s)) solid var(--color-light);
                color: var(--color-dark-2);
            `
        }
    },
    [types_1.EButtonScheme.DARK]: {
        [types_1.EButtonVariant.GHOST]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-dark-2);
                color: var(--color-dark-2);
                
                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-dark-2);
                        color: var(--color-light);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-dark-2);
                color: var(--color-light);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: transparent;
                border: calc(1 * var(--s)) solid var(--color-dark-2);
                color: var(--color-dark-2);
            `
        },
        [types_1.EButtonVariant.FILL]: {
            [types_1.EButtonState.DEFAULT]: ({ state }) => `
                background-color: var(--color-dark-2);
                border: calc(1 * var(--s)) solid var(--color-dark-2);
                color: var(--color-light);
                
                ${!state
                ? `
                    &:hover {
                        background-color: var(--color-light);
                        color: var(--color-dark-2);
                    }
                `
                : ''}
            `,
            [types_1.EButtonState.HOVER]: `
                background-color: var(--color-light);
                color: var(--color-dark-2);
            `,
            [types_1.EButtonState.DISABLED]: `
                background-color: var(--color-dark-2);
                border: calc(1 * var(--s)) solid var(--color-dark-2);
                color: var(--color-light);
            `
        }
    }
};
//# sourceMappingURL=variants.js.map