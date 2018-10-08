import React from 'react'

import { Page, H1, H2, Text } from 'components/lib'
import Section from 'components/Section'
import RvA from 'components/RvA'
import Committee from 'components/Committee'

export default () => (
  <Page>
    <Section>
      <H1>About the symposium</H1>
      <Text>This symposium is a biyearly symposium organized by the Mathematics- and Computer Science association ‘Christiaan Huygens’. The association puts time and resources into organizing these symposia, because they see value in the ability for students and fresh graduates to get an insight in what their studies can achieve in practice. In this edition, titled ‘Care for the future – Improving health bit by bit’, various speakers will give an insight into the advancements in health and healthcare made possible by various technologies, but also ask the question whether we should use them based on ethical objections.</Text>
    </Section>
    <Section>
      <H2>The Host</H2>
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
