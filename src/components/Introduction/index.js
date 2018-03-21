import React from 'react'
import './styles.css'

import introduction from 'assets/intro.png'

const Introduction = () => (
  <div className="Introduction shadow accent row">
    <h2>Introducing the symposium</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.<br />
      <br />
      Stay tuned for more information and we are happy to see you in October.
    </p>
    <img className="Introduction-image" src={introduction} alt="CJ" />
  </div>
)

export default Introduction
