import React from 'react'
import classNames from 'classnames'
import './styles.css'

import unknown from 'assets/speakers/unknown.svg'

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

const Person = ({ revealed=false, links=[], img, name, title, about, small=null }) => (
  <div className={classNames('Person', 'row', { revealed, small })}>
    <div className="Person-social">
      <img className="Person-image" src={(revealed && img) ? img : unknown} alt={name} />
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
