import React from 'react'

import Section from 'components/Section'
import Program from 'components/Program'

const ProgramPage = () => (
  <div className="ProgramPage page">
    <Section wrapper>
      <h1>Program</h1>
      <p>The program will be revealed here as well as on Facebook. Follow our <a href="https://facebook.com/sympo">Facebook page</a> or check back here to stay up to date.</p>
    </Section>
    <Section wrapper>
      <Program />
    </Section>
  </div>
)

export default ProgramPage
