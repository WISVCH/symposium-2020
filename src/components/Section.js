import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { Wrapper } from 'components/lib'

const Section = styled.section`
  position: relative;
  z-index: 1;

  margin-top: 4em;
  margin-bottom: 20vh;

  ${media.small`
    margin-top: 5em;
    margin-bottom: 5em;
  `}
`

export default ({ children, ...rest }) => (
  <Section {...rest}>
    <Wrapper>{children}</Wrapper>
  </Section>
)
