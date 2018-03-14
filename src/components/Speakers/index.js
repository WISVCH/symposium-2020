import React from 'react'

import Person from 'components/Person'

import vanVulpen from 'assets/speakers/m_van_vulpen.jpg'
import vanDeursen from 'assets/speakers/a_van_deursen.jpg'

const speakers = [
  {
    revealed: true,
    links: [
      { type: 'linkedin', url: 'https://nl.linkedin.com/in/marco-van-vulpen-2478158a' },
      { type: 'lumc',     url: 'https://www.lumc.nl/over-het-lumc/hoo/marco-van-vulpen' },
      { type: 'web',      url: 'http://www.hollandptc.nl/team' },
    ],
    img: vanVulpen,
    name: 'Prof.dr. M. van Vulpen',
    title: 'Medical Director, Holland PTC',
    about: `Jouke Waleson (1988) is Product Manager Cloud at Mendix R & D in Rotterdam. He studied Computer Science and Cognitive Artificial Intelligence at Utrecht University and for a short time English Language and Culture at Leiden University. In 2011 he joined Mendix while the company was still in start-up mode, as one of the first developers for the Mendix Cloud. Some years ago he made the switch to Product Management. Jouke has three small kids, lives in Utrecht and likes life.`
  },
  {
    revealed: true,
    links: [
      { type: 'linkedin', url: 'https://nl.linkedin.com/in/marco-van-vulpen-2478158a' },
      { type: 'twitter',  url: 'https://nl.linkedin.com/in/marco-van-vulpen-2478158a' },
      { type: 'lumc',     url: 'https://www.lumc.nl/over-het-lumc/hoo/marco-van-vulpen' },
      { type: 'web',      url: 'http://www.hollandptc.nl/team' },
    ],
    img: vanDeursen,
    name: 'Prof.dr. A. van Deursen',
    title: 'Medical Director, Holland PTC',
    about: `Jouke Waleson (1988) is Product Manager Cloud at Mendix R & D in Rotterdam. He studied Computer Science and Cognitive Artificial Intelligence at Utrecht University and for a short time English Language and Culture at Leiden University. In 2011 he joined Mendix while the company was still in start-up mode, as one of the first developers for the Mendix Cloud. Some years ago he made the switch to Product Management. Jouke has three small kids, lives in Utrecht and likes life.`
  },
  {
    revealed: true,
    links: [
      { type: 'lumc', url: 'https://www.lumc.nl/over-het-lumc/hoo/marco-van-vulpen' },
      { type: 'web',  url: 'http://www.hollandptc.nl/team' },
    ],
    img: vanVulpen,
    name: 'Prof.dr. M. van Vulpen',
    title: 'Medical Director, Holland PTC',
    about: `Jouke Waleson (1988) is Product Manager Cloud at Mendix R & D in Rotterdam. He studied Computer Science and Cognitive Artificial Intelligence at Utrecht University and for a short time English Language and Culture at Leiden University. In 2011 he joined Mendix while the company was still in start-up mode, as one of the first developers for the Mendix Cloud. Some years ago he made the switch to Product Management. Jouke has three small kids, lives in Utrecht and likes life.`
  },
  {
    revealed: false,
    links: [],
    img: null,
    name: null,
    title: null,
    about: null
  }
]

const Speakers = () => (
  <div className="Speakers">
    {speakers.map((speaker, i) => <Person key={i} {...speaker} />)}
  </div>
)

export default Speakers
