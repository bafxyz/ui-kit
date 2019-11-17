import styled from '@emotion/styled/macro'

import IButton, {
    IButtonProps,
    EButtonTextTransform,
    EButtonSize,
    EButtonScheme,
    EButtonState,
    EButtonRadius
} from './types'
import { schemes, sizes } from './variants'

const UiButton: IButton = styled.button(
    ({
        fit,
        nowrap,
        radius = EButtonRadius.DEFAULT,
        size = EButtonSize.NORMAL,
        scheme = EButtonScheme.PRIMARY,
        state = EButtonState.DEFAULT,
        textTransform = EButtonTextTransform.NONE
    }: IButtonProps) => `
        border: none;
        cursor: pointer;
        line-height: 1.2;
        letter-spacing: 1.2 px;
        text-align: center;
        text-transform: ${textTransform};
        ${sizes[size]}
        ${schemes[scheme][state]}
        ${radius ? `border-radius: ${radius};` : ''}
        ${nowrap ? `white-space: nowrap;` : ''}
        ${fit ? `display: block; width: 100%;` : ''}
`
)

UiButton.RADIUS = EButtonRadius
UiButton.SIZE = EButtonSize
UiButton.SCHEME = EButtonScheme
UiButton.STATE = EButtonState
UiButton.TEXT_TRANSFORM = EButtonTextTransform

export default UiButton
