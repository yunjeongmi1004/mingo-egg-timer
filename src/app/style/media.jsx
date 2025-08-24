import { css } from 'styled-components'
import { breakpoints } from './theme.jsx'

const media = {
    xsmall: (...args) => css`
    @media (max-width: ${breakpoints.xsmall}) {
            ${css(...args)}
        }
    `,
    large: (...args) => css`
    @media (max-width: ${breakpoints.large}) {
            ${css(...args)}
        }
    `,
    medium: (...args) => css`
    @media (max-width: ${breakpoints.medium}) {
        ${css(...args)}
    }
`,  
    small: (...args) => css`
        @media (max-width: ${breakpoints.small}) {
            ${css(...args)}
        }
    `,
}

export default media