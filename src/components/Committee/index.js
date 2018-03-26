import React from 'react'
import './styles.css'

import Person from 'components/Person'

// import cj from 'assets/commissioners/cor-jan_heijlema.jpg'
// import hoef from 'assets/commissioners/emiel_hoefkens.jpg'
// import arie from 'assets/commissioners/arianne_schiereck.jpg'
// import wouter from 'assets/commissioners/wouter_raateland.jpg'
// import ilo from 'assets/commissioners/ilona_post.jpg'
// import hillie from 'assets/commissioners/hilco_van_der_wilk.jpg'
// import ireen from 'assets/commissioners/irene_vooijs.jpg'

const commissioners = [
  {
    img: null, //cj,
    name: 'Cor-Jan Heijlema',
    title: 'Chairman',
  },
  {
    img: null, //hoef,
    name: 'Emiel Hoefkens',
    title: 'Secretary',
  },
  {
    img: null, //arie,
    name: 'Arianne Schiereck',
    title: 'Treasurer',
  },
  {
    img: null, //wouter,
    name: 'Wouter Raateland',
    title: 'Commissioner promotion',
  },
  {
    img: null, //ilo,
    name: 'Ilona Post',
    title: 'Commissioner speakers',
  },
  {
    img: null, //hillie,
    name: 'Hilco van der Wilk',
    title: 'Commissioner speakers',
  },
  {
    img: null, //ireen,
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
