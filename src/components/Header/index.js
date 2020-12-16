import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { Wrapper, H1, Text, Link } from 'components/lib'
import GhostLogo from './GhostLogo'
import ScrollDown from './ScrollDown'
import ThankMessage from "../ThankMessage";


const Header = styled.header`
  position: relative;
  margin-bottom: calc(65vmax - 50vw); belonged to header
  ${media.small`
    margin-bottom: calc(65vmax - 114vw); belonged to header
  `}
`

const HeaderContent = Wrapper.extend`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  ${media.small`
    min-height: 20vh;
    max-height: 114vh;
  `}
  padding-top: 2em;
  padding-bottom: 2em;
`

const Title = H1.extend`
  font-size: 9vw;
  margin-bottom: 0;
  ${media.not.large`font-size: 5em;`}
`

const Tagline = H1.extend`
  font-size: 6vw;
  margin: 0;
  ${media.not.large`font-size: 3em;`}
`

const Info = Text.extend`
  margin: 2em 0;
`

const Thanks = Text.extend`
  font-size: 1.5vw;
  margin: 2em 0;
`
const Thanks2 = Text.extend`
  font-size: 1.25vw;
  margin: 2em 0;
`

export default () => (
  <Header>
    <HeaderContent>
      {/*TODO*/}
      {<GhostLogo />}
      <Title>Advanced Analytics</Title>
      <Tagline>Diving Deep Into Your Data</Tagline>
      <Info>
        {/*TODO*/}
        19:00 November 19th, 2020&nbsp;&nbsp;&nbsp;&nbsp;
        Online Symposium <br/>
          {/*Register for free <Link target="_blank" href={"/2020/tickets"} rel="noopener noreferrer">here</Link>!*/}
      </Info>
        <ThankMessage/>
      {/*<Button primary large to="/tickets">Get your ticket now</Button>*/}
    </HeaderContent>
    <ScrollDown>&darr;</ScrollDown>
  </Header>
)