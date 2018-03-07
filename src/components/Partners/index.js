import React from 'react'
import './styles.css'

import ch from 'assets/partners/ch.png'
import tudelft from 'assets/partners/tudelft.png'

const partners = [
  {
    name: 'W.I.S.V. \'Christiaan Huygens\'',
    img: ch,
    url: 'https://ch.tudelft.nl/',
  },
  {
    name: 'TU Delft',
    img: tudelft,
    url: 'https://tudelft.nl/',
  }
]

const Partner = ({ name, img, url }) => (
  <a className="Partner" href={url} target="_blank">
    <img src={img} alt={name} />
  </a>
)

const Partners = () => (
  <div className="Partners">
    {partners.map((partner, i) => <Partner key={i} {...partner} />)}
  </div>
)

export default Partners
