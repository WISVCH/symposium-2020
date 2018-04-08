import React from 'react'
import classNames from 'classnames'
import './styles.css'

import unknown from 'assets/speakers/unknown.svg'

function* duoRand(min, max) {
  let r
  while (true) {
    r = parseInt(min + (max - min) * Math.random(), 10)
    yield r
    yield min + max - r
  }
}

const gen = duoRand(90, 110)

const PersonLink = ({ type, url }) => (
  <a
    className={classNames('Person-link', type)}
    href={url}
    target="_blank"
  >{type}</a>
)

const PersonLinks = ({ links=[] }) => (
  <div className="Person-links">
    {links.map((link, i) => <PersonLink key={i} {...link} />)}
  </div>
)

const PersonAvatar = ({ revealed, img, name }) =>
  <img
    className="Person-image"
    style={{
      borderTopLeftRadius: `${gen.next().value}% ${gen.next().value}%`,
      borderTopRightRadius: `${gen.next().value}% ${gen.next().value}%`,
      borderBottomRightRadius: `${gen.next().value}% ${gen.next().value}%`,
      borderBottomLeftRadius: `${gen.next().value}% ${gen.next().value}%`,
    }}
    src={(revealed && img) ? img : unknown}
    alt={name}
  />

const Person = ({ revealed=false, link=null, links=[], img, name, title, about, small=null, horizontal=null, className }) => (
  <div className={classNames('Person', 'row', { revealed, small, horizontal }, className)}>
    <div className="Person-social">
      {link
        ? <a href={link} target="_blank">
            <PersonAvatar revealed={revealed} img={img} name={name} />
          </a>
        : <PersonAvatar revealed={revealed} img={img} name={name} /> }
      { revealed && links.length
        ? <PersonLinks links={links} />
        : null }
    </div>
    <div className="Person-info">
      <h2 className="Person-name">{revealed ? name : 'To be revealed'}</h2>
      <p className="Person-title">{revealed ? title : 'Check back soon'}</p>
      {about
        ? <p className="Person-about">
            <strong>About:</strong> {about}
          </p>
        : null }
    </div>
  </div>
)

export default Person
