import React from 'react'

import { Page, H1 } from 'components/lib'
import Section from 'components/Section'
import Tickets from 'components/Tickets'
import Texture from 'components/Header/Texture'

export default () => (
  <Page>
    <Section>
      <Texture />
      <H1>Tickets</H1>
      <Tickets />
    </Section>
  </Page>
)
