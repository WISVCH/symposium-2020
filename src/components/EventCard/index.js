import React from 'react'
import './styles.css'

const EventCard = ({ title, bgImage, bgColor }) => (
  <div
    className="EventCard"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundColor: bgColor ? bgColor : '#fff',
    }}
  >
    <h2 className="EventCard-title">{title}</h2>
  </div>
)

export default EventCard
