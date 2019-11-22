import styled from '@emotion/styled/macro'
import { compose, color, flexbox, grid, layout, position, space } from 'styled-system'

const Box = styled.div(
    {
        boxSizing: 'border-box',
        minWidth: 0
    },
    compose(position, space, color, layout, flexbox, grid)
)

export default Box
