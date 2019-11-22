import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select } from '@storybook/addon-knobs'

import { UiButton } from '~/index'
import readme from './readme.raw.md'

const ButtonStory = ({
    innerText = text('text', 'Button example'),
    size = select('size', UiButton.SIZE, UiButton.SIZE.NORMAL),
    fit = boolean('fit', false),
    radius = select('radius', UiButton.RADIUS, UiButton.RADIUS.DEFAULT),
    variant = select('variant', UiButton.VARIANT, UiButton.VARIANT.PRIMARY),
    state = select('state', UiButton.STATE, UiButton.STATE.DEFAULT),
    textTransform = select('transform', UiButton.TEXT_TRANSFORM, UiButton.TEXT_TRANSFORM.NONE)
}) => (
    <>
        <UiButton size={size} state={state} variant={variant} radius={radius} fit={fit} textTransform={textTransform}>
            {innerText}
        </UiButton>
    </>
)

const opts = {
    notes: { markdown: readme }
}

storiesOf('UI Components|UiButton', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <ButtonStory />, opts)
