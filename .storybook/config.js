import '@storybook/components'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

// Config
addParameters({
    options: {
        // panelPosition: 'right'
    }
})

// Decorators
addDecorator(withKnobs)
addDecorator(withA11y)

// Require all *.story.js file
const req = require.context('../src', true, /\.?(story|stories|book)\.[jt]sx?$/)
configure(() => req.keys().forEach(req), module)
