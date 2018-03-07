import React from 'react'
import './styles.css'

const Header = ({ bgImage, children }) => (
  <div
    className="Header"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="wrapper small">
      {children}
    </div>
  </div>
)

export default Header
