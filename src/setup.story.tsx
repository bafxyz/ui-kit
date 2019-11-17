// Storybook setup file
import './storybook.global.scss'
import React from 'react'
import { addDecorator } from '@storybook/react'

addDecorator(storyFn => <div>{storyFn()}</div>)
