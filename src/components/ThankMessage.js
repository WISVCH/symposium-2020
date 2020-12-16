import React from 'react'
import styled from 'styled-components'
import {theme, media, darken, colors, opacity} from 'utilities/styles'

import {H2, Link, Text} from 'components/lib'
import Texture from 'components/Texture'

import bye from 'assets/Bye-cropped.jpg'

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

const ThankMessage = styled.div`
  position: relative;
  z-index: 1;

  overflow: hidden;

  border: ${theme('border', 'width')} solid ${props =>
    darken(props.theme.colors.primary, 20)};
  border-radius: ${theme('border', 'radius')};

  background-color: ${props => opacity(props.theme.colors.secondary, 0.6)};


  ${media.small`padding: 1em 2em;`}
  ${media.not.small`padding: 2em 4em;`}
`

const IntroText = Text.extend`
  ${media.not.medium`
  margin-right: 0%;
  width: 56%;
  `}
`

const Image = styled.img`
  ${media.not.medium`
      position: absolute;
      right: 1em; bottom: 1em;
      border: ${theme('border', 'width')} solid ${theme('colors', 'background')};
         border-radius: ${theme('border', 'radius')};
      width: 40%;
  `}

  ${media.medium`
      display: block;
      width: 60%;
      margin: -4em -1em -2em auto;
  `}

  ${media.small`
    width: 80%;
    margin: 1em 1.5em -1em auto;
  `}
`

export default () => (
    <ThankMessage>
        <IntroTexture size="4em"/>
        <H2>Thank You!</H2>
        <IntroText>
            Thanks to everyone who attended the Symposium, we had a great time and we hope you did as well!
            <br/> <br/>
            <h2>
                Booklet & Recording Available
            </h2>
            For those that want to relive the experience, we will provide the booklet of the Symposium <Link to={"/booklet"} rel="noopener noreferrer">here</Link> and the
            entire recording of the event is available to watch <Link to={"/recording"} rel="noopener noreferrer">here</Link>. See you all at the next Symposium!
            <br/> <br/>
            Symposium Committee 2019-2020
        </IntroText>
        <Image src={bye} alt="Symposium 2019-2020 bye"/>

    </ThankMessage>
)//<!--<Image src={cj} alt="Cor-Jan Heijlema" /> place this in introduction below introtext-->
