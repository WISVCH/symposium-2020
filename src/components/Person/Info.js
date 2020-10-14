import React from 'react'
import styled, { css } from 'styled-components'
import { media } from 'utilities/styles'

import { H3, Text } from 'components/lib'

const Info = styled.div`
  display: inline-block;
  width: calc(100% - 9em);

  vertical-align: top;

  ${props => props.small && css`
    width: calc(100% - 7em);

    ${Name} {
      margin-top: .5em;
    }
  `}

  ${media.small`
    ${props => !props.horizontal && css`
        display: block;
        width: auto;

        ${Name}, ${Title}, ${About} {
          text-align: center;
        }
    `}
  `}
`

const About = Text.extend

const Name = H3.extend`
  margin: 1.25em 0 0;
`

const Title = Text.extend`
  margin-top: .25em;
`

export default ({name, title, about, ...rest}) => (
  <Info {...rest}>
    <Name>{name}</Name>
    <Title>{title}</Title>
    {about
      ? <About>
            {/*<strong>About:</strong>*/} {about}
        </About>
      : null }
  </Info>
)
