import React from 'react'

import Section from 'components/Section'
import Tickets from 'components/Tickets'

const TicketsPage = () => (
  <div className="TicketsPage page">
    <Section wrapper>
      <h1>Tickets</h1>
      <Tickets />
    </Section>
  </div>
)

export default TicketsPage
