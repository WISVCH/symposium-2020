import React from 'react'
import './styles.css'

import header from 'assets/header.jpg'
import logo from 'assets/logo/symposium_logo_color_vertical.svg'

const Header = () => (
  <div
    className="Header"
    style={{ backgroundImage: `url(${header})` }}
  >
    <div className="wrapper small">
      <img src={logo} alt="Care for the Future - Improving health bit by bit" />
      {/* <p>Symposium by W.I.S.V. 'Christiaan Huygens'</p> */}
      <div>
        <button className="accent">Tickets soon available</button>
      </div>
      <div>
        <div className="Header-date light shadow rounded">22 October 2018</div>
        <div className="Header-location light shadow rounded">Theatre De Veste</div>
      </div>
    </div>
  </div>
)

export default Header
