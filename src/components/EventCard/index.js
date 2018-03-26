import React from 'react'
import classNames from 'classnames'
import './styles.css'

const pad = c => n => s =>
  c.repeat(n - s.toString().length) + s

const zeroPad = pad('0')
const zeroPad2 = zeroPad(2)
const Time = ({ time }) => `${zeroPad2(time.getHours())}:${zeroPad2(time.getMinutes())}`

const EventCard = ({ revealed = false, title, start, end, bgImage, bgColor }) => (
  <div
    className={classNames('EventCard', 'row', { revealed })}
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundColor: bgColor ? bgColor : '#fff',
    }}
  >
    <h2 className="EventCard-title">{revealed
      ? title
      : 'To be Revealed'}</h2>
    <div className="EventCard-time">
      <Time time={start} /> - <Time time={end} />
    </div>
  </div>
)

export default EventCard
