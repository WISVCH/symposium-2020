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

  background-color: ${theme('colors','secondary')};

  ${media.small`padding: 1em 2em;`}
  ${media.not.small`padding: 2em 4em;`}
`

const IntroText = Text.extend`
  ${media.not.medium`
  margin-right: 0%;
  `}
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
        Nowadays, almost all aspects of our lives seem to be driven by data. Over the last years, data analytics techniques have become more and more sophisticated. Businesses and academia have been pushing the boundaries of current technologies for solving the complex problems that we face. While the possibilities of data analytics seem endless, they offer challenges as well. More and more people ask themselves how much data they are willing to share. Are businesses stepping over moral and ethical boundaries to generate profit?
        <br/>
        This will be the core topic of this year’s symposium by the mathematics and computer science study association “Christiaan Huygens”. During this inspiring event, we will explore the possibilities of the state-of-the-art data analytics techniques as well as discuss the ethical concerns associated with processing personal data. Stay tuned as we will announce many more details of the upcoming event soon!
        <br/> <br/>
        See you there!
        <br /> <br/>
      Daniël van Gelder <br/>
      Chairman Symposium Committee 2019-2020
    </IntroText>

  </Introduction>
)//<!--<Image src={cj} alt="Cor-Jan Heijlema" /> place this in introduction below introtext-->
