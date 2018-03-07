import React from 'react'
import classNames from 'classnames'
import './styles.css'

import vanVulpen from 'assets/speakers/van_vulpen.jpg'
import vanDeursen from 'assets/speakers/van_deursen.jpg'
import unknown from 'assets/speakers/unknown.svg'

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

const SpeakerLink = ({ type, url }) => (
  <a
    className={classNames('Speaker-link', type)}
    href={url}
    title={type}
    target="_blank"
  />
)

const SpeakerLinks = ({ links }) => (
  <div className="Speaker-links">
    {links.map((link, i) => <SpeakerLink key={i} {...link} />)}
  </div>
)

const Speaker = ({ revealed, links, img, name, title, about }) => (
  <div className={classNames('Speaker', 'row', { revealed })}>
    <div className="Speaker-social">
      <img className="Speaker-image" src={img ? img : unknown} alt={name} />
      { links.length
        ? <SpeakerLinks links={links} />
        : null }
    </div>
    <div className="Speaker-info">
      <h2 className="Speaker-name">{name ? name : 'To be revealed'}</h2>
      <p className="Speaker-title">{title ? title : 'Check back soon'}</p>
      <p className="Speaker-about">
        <strong>About:</strong> {about}
      </p>
    </div>
  </div>
)

const Speakers = () => (
  <div className="Speakers">
    {speakers.map((speaker, i) => <Speaker key={i} {...speaker} />)}
  </div>
)

export default Speakers
