import React from 'react'
import './styles.css'

import Person from 'components/Person'

import cj from 'assets/commissioners/cor-jan_heijlema.jpg'
import hoef from 'assets/commissioners/emiel_hoefkens.jpg'
import arie from 'assets/commissioners/arianne_schiereck.jpg'
import wouter from 'assets/commissioners/wouter_raateland.jpg'
import ilo from 'assets/commissioners/ilona_post.jpg'
import hillie from 'assets/commissioners/hilco_van_der_wilk.jpg'
import ireen from 'assets/commissioners/irene_vooijs.jpg'

const commissioners = [
  {
    img: cj,
    name: 'Cor-Jan Heijlema',
    title: 'Chairman',
  },
  {
    img: hoef,
    name: 'Emiel Hoefkens',
    title: 'Secretary',
  },
  {
    img: arie,
    name: 'Arianne Schiereck',
    title: 'Treasurer',
  },
  {
    img: wouter,
    name: 'Wouter Raateland',
    title: 'Commissioner promotion',
  },
  {
    img: ilo,
    name: 'Ilona Post',
    title: 'Commissioner speakers',
  },
  {
    img: hillie,
    name: 'Hilco van der Wilk',
    title: 'Commissioner speakers',
  },
  {
    img: ireen,
    name: 'Irene Vooijs',
    title: 'Supervisor',
  },
]

const Committee = () => (
  <div className="Committee row">
    {commissioners.map(({ title, ...rest }, i) =>
      <Person
        key={i}
        revealed={true}
        title={title}
        vertical
        small
        className="Commissioner"
        {...rest}
      />
    )}
  </div>
)

export default Committee
