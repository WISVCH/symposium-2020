import React from 'react'

import Speakers from 'components/Speakers'

const SpeakersPage = () => (
  <div className="SpeakersPage page">
    <div className="wrapper">
      <h1>Speakers</h1>
      <p>The speakers will be revealed here as well as on Facebook. Follow our <a href="https://facebook.com/sympo">Facebook page</a> or check back here to stay up to date.</p>
      <Speakers />
    </div>
  </div>
)

export default SpeakersPage
