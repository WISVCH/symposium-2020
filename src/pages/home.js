import React from 'react'

import Header from 'components/Header'
import Section from 'components/Section'
import Introduction from 'components/Introduction'
import Partners from 'components/Partners'
import RvA from 'components/RvA'
import Committee from 'components/Committee'
import Map from 'components/Map'

import header from 'assets/header.jpg'
import logo from 'assets/logo/symposium_logo_color_vertical.svg'

const HomePage = () => (
  <div className="HomePage page">
    <Header bgImage={header}>
      <div className="Homepage-header">
        <img src={logo} alt="Care for the Future - Improving health bit by bit" />
        <p>
          Symposium by W.I.S.V. 'Christiaan Huygens'<br />
          <span style={{ float: 'left' }}>22 October 2018</span>
          <span style={{ float: 'right' }}>@Theatre De Veste</span>
        </p>
        <button className="accent">Tickets soon available</button>
      </div>
    </Header>
    <Section id="intro">
      <div className="wrapper">
        <Introduction />
      </div>
    </Section>
    <Section id="partners">
      <div className="wrapper">
        <h2>Partners and Sponsors</h2>
        <p>Thanks to our partners and sponsors for empowering this symposium, each in their own way.</p>
        <Partners />
      </div>
    </Section>
    {/* <Section id="CvA">
      <div className="wrapper">
        <h2>Board of Recommendation</h2>
        <p>For the organization of our symposium several companies and universities were contacted. By their participation in our Board of Recommendation, the following people, speaking for their respectable institutions, acknowledge the importance and competence of the symposium and recommend supporting the organization.</p>
      </div>
    </Section> */}
    <Section id="RvA">
      <div className="wrapper">
        <h2>Board of Advice</h2>
        <p>For acquiring contacts with several parties and for other support and tips, we have turned to the long experience and wisdom of professors, researchers and employees from our university.</p>
        <RvA />
      </div>
    </Section>
    <Section id="committee">
      <div className="wrapper">
        <h2>The Organising Committee</h2>
        <Committee />
      </div>
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
