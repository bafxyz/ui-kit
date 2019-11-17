"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const macro_1 = __importDefault(require("@emotion/styled/macro"));
const types_1 = require("./types");
const variants_1 = require("./variants");
const UiButton = macro_1.default.button(props => {
    const { nowrap, fit, disabled, state, round = false, transform = 'uppercase', radius = types_1.EButtonRadius.NONE, size = types_1.EButtonSize.NORMAL, scheme = types_1.EButtonScheme.PRIMARY, variant = types_1.EButtonVariant.GHOST } = props;
    const btnState = variants_1.schemes[scheme][variant] && variants_1.schemes[scheme][variant][state || types_1.EButtonState.DEFAULT];
    let buttonState = '';
    if (btnState) {
        buttonState = typeof btnState === 'string' ? btnState : btnState(props);
    }
    return `
        cursor: pointer;
        text-align: center;
        text-transform: ${transform};
        letter-spacing: calc(1.5 * var(--s));
        padding: ${round ? variants_1.sizes[size].y : `${variants_1.sizes[size].y} ${variants_1.sizes[size].x}`};
        font-size: var(--font-size-${size});
        ${buttonState}
        ${radius ? `border-radius: ${radius};` : ''}
        ${nowrap ? `white-space: nowrap;` : ''}
        ${fit ? `display: block; width: 100%;` : ''}
        ${disabled || state === types_1.EButtonState.DISABLED ? `opacity: 0.4; pointer-events: none;` : ''}
        ${variant === types_1.EButtonVariant.NONE ? 'padding: 0;' : ''}
        ${variant === types_1.EButtonVariant.NONE || variant === types_1.EButtonVariant.PLAIN
        ? 'background: none !important; border: none !important;'
        : ''}
`;
});
UiButton.SIZE = types_1.EButtonSize;
UiButton.STATE = types_1.EButtonState;
UiButton.SCHEME = types_1.EButtonScheme;
UiButton.VARIANT = types_1.EButtonVariant;
UiButton.RADIUS = types_1.EButtonRadius;
exports.default = UiButton;
//# sourceMappingURL=index.js.map