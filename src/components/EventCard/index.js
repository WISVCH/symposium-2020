import React from 'react'
import classNames from 'classnames'
import './styles.css'

const EventCard = ({ revealed = false, title, bgImage, bgColor }) => (
  <div
    className={classNames('EventCard', { revealed })}
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundColor: bgColor ? bgColor : '#fff',
    }}
  >
    <h2 className="EventCard-title">{revealed
      ? title
      : 'To be Revealed'}</h2>
  </div>
)

export default EventCard
