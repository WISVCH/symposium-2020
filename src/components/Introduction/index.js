import React from 'react'
import './styles.css'

import introduction from 'assets/intro.png'

const Introduction = () => (
  <div className="Introduction shadow accent row">
    <h2>Introducing the symposium</h2>
    <p>
      This October, we will present you healthcare in the future.
      In a day filled with talks, discussions and fun, you will be enlightened by the academics who are currently pushing the boundaries in healthcare technology, improving health, bit by bit.<br />
      <br />
      Stay tuned for more information and we are happy to see you in October.<br />
      <br />
      Cheers, Cor-Jan Heijlema - Chairman
    </p>
    <img className="Introduction-image" src={introduction} alt="CJ" />
  </div>
)

export default Introduction
