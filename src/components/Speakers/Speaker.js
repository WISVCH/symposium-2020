import React from 'react'
import styled from 'styled-components'
import { theme } from 'utilities/styles'
import slug from 'utilities/slug'

import { H3, Text } from 'components/lib'

import { Link } from 'react-router-dom'

const Speaker = styled(Link)`
  display: block;
  border-radius: ${theme('border','radius')};

  background:
    linear-gradient(transparent 50%, rgba(0, 0, 0, .45)),
    url(${props => props.img}) no-repeat center / cover;

  padding: 40% 1em 1em;
  margin-bottom: 1em;

  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 ${theme('border','width')} ${theme('colors','primary')};
  }
`

const Name = H3.extend`
  margin-bottom: 0;
`

const Company = styled.span`
  font-size: .7em;
`

const Title = Text.extend`
  margin: 0;
`

export default ({img, name, company, title}) => (
    // TODO: what to do with speakers for which the event has revealed = false?
    // FIXME: the link to the event page might not match the actual page
  <Speaker to={`/event/${slug(name)}`} img={img}>
    <Name>{name} <Company>{company}</Company></Name>
    <Title>{title}</Title>
  </Speaker>
)
