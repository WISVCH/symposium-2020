import styled, { css } from 'styled-components'
import { darken, lighten, theme } from 'utilities/styles'

const Button = styled.button`
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}

  border-color: ${props => darken(props.theme.colors.text, 20)};
  border-width: ${theme('border','width')};
  border-radius: ${theme('border','radius')};

  font-family: ${theme('fonts','titles')};

  background: ${theme('colors','text')};

  ${props => props.primary && css`
    border-color: ${darken(theme('colors','primary')(props), 20)};
    background-color: ${theme('colors','primary')(props)};
    color: ${theme('colors','text')(props)};
  `}

  ${props => props.small && css`padding: .25em .125em;`}
  ${props => props.medium && css`padding: .5em .25em;`}
  ${props => props.large && css`padding: .7em .5em;`}

  &:hover {
    cursor: pointer;
    ${props => props.primary && css`
      border-color: ${darken(props.theme.colors.primary, 10)};
      background-color: ${lighten(props.theme.colors.primary, 10)};
    `}
  }
`

export default Button
