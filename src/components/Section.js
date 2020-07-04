import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { Wrapper } from 'components/lib'

const Section = styled.section`
  position: relative;
  z-index: 1;

  margin-top: 4em;
  margin-bottom: 29vh;

  ${media.small`
    margin-top: 14em;
    margin-bottom: 14em;
  `}
`

export default ({ children, ...rest }) => (
  <Section {...rest}>
    <Wrapper>{children}</Wrapper>
  </Section>
)
