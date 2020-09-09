import React from 'react'

import { Page, H1, Text, Link } from 'components/lib'
import Section from 'components/Section'
import Program from 'components/Program'

export default () => (
  <Page>
    <Section>
      <H1>Program</H1>
      <Text>The program will be revealed here, check back here to stay up to date.</Text>
          {/*as well as on Facebook. Follow our <Link target="_blank" href="https://www.facebook.com/events/165194104170772/" rel="noopener noreferrer">Facebook page</Link> or*/}

      <Program />
    </Section>
  </Page>
)
