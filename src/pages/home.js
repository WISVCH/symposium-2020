import React from 'react'

import Header from 'components/Header'
import Partners from 'components/Partners'
import RvA from 'components/RvA'

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
    <section id="intro">
      <div className="wrapper">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
      </div>
    </section>
    <section id="partners">
      <div className="wrapper">
        <h2>Partners and Sponsors</h2>
      </div>
      <Partners />
    </section>
    <section id="CvA">
      <div className="wrapper">
        <h2>Board of Recommendation</h2>
        <p>For the organization of our symposium several companies and universities were contacted. By their participation in our Board of Recommendation, the following people, speaking for their respectable institutions, acknowledge the importance and competence of the symposium and recommend supporting the organization.</p>
      </div>
    </section>
    <section id="RvA">
      <div className="wrapper">
        <h2>Board of Advice</h2>
        <p>For acquiring contacts with several parties and for other support and tips, we have turned to the long experience and wisdom of professors, researchers and employees from our university.</p>
        <RvA />
      </div>
    </section>
    <section id="committee">
      <div className="wrapper">
        <h2>The Organising Committee</h2>
      </div>
    </section>
  </div>
)

export default HomePage
