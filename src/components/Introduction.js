import React from 'react'
import styled from 'styled-components'
import { theme, media, darken } from 'utilities/styles'

import { H2, Text } from 'components/lib'
import Texture from 'components/Texture'

import cj from 'assets/intro.png'

const IntroTexture = Texture.extend`
  ${media.not.medium`
    left: 60%; top: 0;
    right: -40%; bottom: -40%;

    background-size: 6em;
  `}

  ${media.medium`
    left: -20%; top: 70%;
    right: -40%; bottom: -30%;

    background-size: 8em;
  `}

  opacity: .2;

  filter: invert(100%);
`

const Introduction = styled.div`
  position: relative;
  z-index: 1;

  overflow: hidden;

  border: ${theme('border','width')} solid ${props =>
    darken(props.theme.colors.primary, 20)};
  border-radius: ${theme('border','radius')};

  background-color: ${theme('colors','primary')};

  ${media.small`padding: 1em 2em;`}
  ${media.not.small`padding: 2em 4em;`}
`

const IntroText = Text.extend`
  ${media.not.medium`margin-right: 30%;`}
`

const Image = styled.img`
  ${media.not.medium`
      position: absolute;
      right: 1em; bottom: 0;

      width: 30%;
  `}

  ${media.medium`
      display: block;
      width: 60%;
      margin: -4em -1em -2em auto;
  `}

  ${media.small`
    width: 80%;
    margin: -4em -1em -1em auto;
  `}
`

export default () => (
  <Introduction>
    <IntroTexture size="4em" />
    <H2>Introducing the symposium</H2>
    <IntroText>
      This October, we will present you healthcare in the future.
      In a day filled with talks, discussions and fun, you will be enlightened by the academics who are currently pushing the boundaries in healthcare technology, improving health, bit by bit.<br />
      <br />
      Stay tuned for more information and we are happy to see you in October.<br />
      <br />
      Cheers,<br />
      Cor-Jan Heijlema
    </IntroText>
    <Image src={cj} alt="Cor-Jan Heijlema" />
  </Introduction>
)
