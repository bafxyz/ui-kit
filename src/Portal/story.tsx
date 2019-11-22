import React from 'react'
import { storiesOf } from '@storybook/react'

import { UiPortal } from '~'
import readme from './readme.raw.md'

const PortalStory = () => <UiPortal>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dicta.</UiPortal>

const opts = {
    notes: { markdown: readme }
}

storiesOf('UI Components|UiPortal', module)
    .addDecorator(storyFn => <div>{storyFn()}</div>)
    .add('Example', () => <PortalStory />, opts)
