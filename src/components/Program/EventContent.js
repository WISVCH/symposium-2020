import React from 'react'
import styled, { css } from 'styled-components'
import { theme, opacity, media } from 'utilities/styles'

import { H3, Text, Button } from 'components/lib'

const EventContent = styled.div`
  position: relative;
  overflow: hidden;

  display: inline-block;
  padding: 1em;
  border-radius: ${theme('border','radius')};

  background-color: ${props => opacity(theme('colors','text')(props), .2)};

  ${props => props.large && css`
    ${'' /* height: 9em; */}
  `}

  ${props => props.active && css`
    &:hover {
      box-shadow: 0 0 0 ${theme('border','width')(props)} ${theme('colors','primary')};
    }
  `}

  ${media.not.medium`width: calc(100% - 8em);`}
  ${media.medium`
    width: 100%;
    font-size: .8em;
  `}
  ${media.small`font-size: .6em;`}
`

const Title = H3.extend`
  margin: .15em 0 0;
`

const Image = styled.div`
  position: absolute;
  left: 0; top: 0;
  bottom: 0;

  width: 10em;

  background: url(${props => props.src}) no-repeat center / cover;
  // For PwC logo
  background-color: white;

  ${props => props.src && css`
    & ~ h3 { margin-left: 5em; }
    & ~ p { margin-left: 10em; 
    ${media.small`
      margin-left: 8em; 
      font-size: 1.25em; 
      `}
  `}
`

const EventButton = styled(Button)`
  float: right;
`

export default ({linkReg, bgImage, title, meta, active, imgCopyright, ...rest}) =>
  <EventContent {...rest} active={active} large={!!bgImage}>
    <Image src={bgImage} title={imgCopyright ? "© " + imgCopyright : meta}/>
    <Title>{title}</Title>
    {meta
      ? <Text>{meta}</Text>
      : null}
    {linkReg ? <EventButton medium>Register Now!</EventButton> : active
      ? <EventButton medium>Read More</EventButton>
      :  null }
  </EventContent>
