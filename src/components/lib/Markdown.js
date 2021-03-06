import styled, { css } from 'styled-components'
import { opacity } from 'utilities/styles'

import Markdown from 'react-markdown'

const StyledMarkdown = styled(Markdown)`
  line-height: ${props => props.theme.lineHeight};
  color: ${props => opacity(props.theme.colors.text, props.theme.opacity.text)};

  ${props => props.size && css`font-size: ${props.size}em;`}

  ${props => props.accent && css`color: ${props.theme.colors.accent};`}

  ${props => props.center && css`text-align: center;`}
`

export default StyledMarkdown
