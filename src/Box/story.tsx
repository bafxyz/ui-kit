import React from 'react'
import { storiesOf } from '@storybook/react'
import { color, number, text } from '@storybook/addon-knobs'

import { UiBox } from '~/index'
import readme from './readme.raw.md'

const BoxStory = ({}) => (
    <>
        <UiBox
            m={number('m', 5)}
            p={number('p', 4)}
            mb={number('p', 4)}
            bg={color('bg', 'tomato')}
            color={color('color', 'white')}
            position={text('position', 'relative')}
        >
            This is a tomato box, with responsive width, some padding, and margin bottom
        </UiBox>
    </>
)

const opts = {
    notes: { markdown: readme }
}

storiesOf('UI Components|UiBox', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <BoxStory />, opts)
