import React from 'react'
import styled from 'styled-components'
import { media } from 'utilities/styles'

import { Wrapper } from 'components/lib'

const Section = styled.section`
  position: relative;
  margin-top: 8em;

  ${media.small`
    margin-top: 4em;
  `}
`

export default ({ children, ...rest }) => (
  <Section {...rest}>
    <Wrapper>{children}</Wrapper>
  </Section>
)
