import React from 'react'
import './styles.css'

import introduction from 'assets/intro.png'

const Introduction = () => (
  <div className="Introduction shadow accent row">
    <h2>Introducing the symposium</h2>
    <p>
      This October, we. During this day, you will be enlightened by the people at the front of i This symposium focusses on recent and upcomming developments in academic medtech<br />
      <br />
      Stay tuned for more information and we are happy to see you in October.<br />
      <br />
      Cheers, Cor-Jan Heijlema - Chairman of the symposium
    </p>
    <img className="Introduction-image" src={introduction} alt="CJ" />
  </div>
)

export default Introduction
