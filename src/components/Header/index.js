import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { Wrapper, H1, Text, Button } from 'components/lib'
import GhostLogo from './GhostLogo'
import ScrollDown from './ScrollDown'

const Header = styled.header`
  position: relative;
  margin-bottom: calc(65vmax - 50vw); belonged to header
  
`

const HeaderContent = Wrapper.extend`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
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

export default () => (
  <Header>
    <HeaderContent>
      {/*TODO*/}
      {<GhostLogo />}
      <Title>Advanced Analytics</Title>
      <Tagline>Diving Deep Into Your Data</Tagline>
      <Info>
        {/*TODO*/}
        November 19th, 2020&nbsp;&nbsp;&nbsp;&nbsp;
        Online Symposium
      </Info>
      {/*<Button primary large to="/tickets">Get your ticket now</Button>*/}
    </HeaderContent>
    <ScrollDown>&darr;</ScrollDown>
  </Header>
)