import React from 'react'

import { Page, H1, H2, Text } from 'components/lib'
import Section from 'components/Section'
import RvA from 'components/RvA'
import Committee from 'components/Committee'

export default () => (
  <Page>
    <Section>
      <H1>About the symposium</H1>
      <Text></Text>
    </Section>
    <Section>
      <H2>Board of Advice</H2>
      <Text>For acquiring contacts with several parties and for other support and tips, we have turned to the long experience and wisdom of professors, researchers and employees from our university.</Text>
      <RvA />
    </Section>
    <Section>
      <H2>The Organising Committee</H2>
      <Committee />
    </Section>
  </Page>
)
