import React from 'react'

import Header from 'components/Header'
import Section from 'components/Section'
import Introduction from 'components/Introduction'
import Partners from 'components/Partners'
import CvA from 'components/CvA'
import RvA from 'components/RvA'
import Committee from 'components/Committee'
import Map from 'components/Map'

const HomePage = () => (
  <div className="HomePage page">
    <Header />
    <Section wrapper id="intro">
      <Introduction />
    </Section>
    <Section wrapper id="partners">
      <h2>Partners and Sponsors</h2>
      <p>Thanks to our partners and sponsors for empowering this symposium, each in their own way.</p>
      <Partners />
    </Section>
    <Section wrapper id="CvA">
      <h2>Board of Recommendation</h2>
      <p>For the organization of our symposium several companies and universities were contacted. By their participation in our Board of Recommendation, the following people, speaking for their respectable institutions, acknowledge the importance and competence of the symposium and recommend supporting the organization.</p>
      <CvA />
    </Section>
    <Section wrapper id="RvA">
      <h2>Board of Advice</h2>
      <p>For acquiring contacts with several parties and for other support and tips, we have turned to the long experience and wisdom of professors, researchers and employees from our university.</p>
      <RvA />
    </Section>
    <Section wrapper id="committee">
      <h2>The Organising Committee</h2>
      <Committee />
    </Section>
    <Section id="location">
      <div className="wrapper">
        <h2>Location</h2>
        <p>This years symposium is held at Theater de Veste. Address: Vesteplein 1, 2611 WG, Delft</p>
      </div>
      <Map />
    </Section>
  </div>
)

export default HomePage
