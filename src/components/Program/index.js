import React from 'react'
import './styles.css'

import EventCard from 'components/EventCard'

const parseTime = (h, m) =>
  new Date(Date.UTC(2018, 10, 22, h, m, 0))

const events = [
  {
    revealed: true,
    start: parseTime( 8, 30),
    end:   parseTime( 9,  0),
    title: 'Registration',
  },
  {
    revealed: true,
    start: parseTime( 9,  0),
    end:   parseTime( 9, 15),
    title: 'Opening',
  },
  {
    revealed: false,
    start: parseTime( 9, 15),
    end:   parseTime( 9, 45),
    title: 'Talk 1',
  },
  {
    revealed: true,
    start: parseTime( 9, 45),
    end:   parseTime(10,  0),
    title: 'Coffee break',
  },
  {
    revealed: false,
    start: parseTime(10,  0),
    end:   parseTime(10, 45),
    title: 'Talk 2',
  },
  {
    revealed: true,
    start: parseTime(10, 45),
    end:   parseTime(12,  0),
    title: 'Panel',
  },
  {
    revealed: true,
    start: parseTime(12,  0),
    end:   parseTime(13,  0),
    title: 'Lunch (with companies)',
  },
  {
    revealed: false,
    start: parseTime(13,  0),
    end:   parseTime(13, 45),
    title: 'Talk 3',
  },
  {
    revealed: false,
    start: parseTime(13, 45),
    end:   parseTime(14, 30),
    title: 'Talk 4',
  },
  {
    revealed: true,
    start: parseTime(14, 30),
    end:   parseTime(14, 45),
    title: 'Coffee break',
  },
  {
    revealed: false,
    start: parseTime(14, 45),
    end:   parseTime(15, 30),
    title: 'Talk 5',
  },
  {
    revealed: false,
    start: parseTime(15, 30),
    end:   parseTime(16, 15),
    title: 'Talk 6',
  },
  {
    revealed: true,
    start: parseTime(16, 15),
    end:   parseTime(17,  0),
    title: 'Drinks',
  },
]

const day = {
  start: events
    .map(event => event.start)
    .reduce((min, s) => s < min ? s : min, events[0].start),
  end: events
    .map(event => event.end)
    .reduce((max, e) => e > max ? e : max, events[0].end),
}
day.duration = day.end - day.start

const times = new Array(day.end.getHours() - day.start.getHours() + 1)
  .fill(0)
  .map((_, i) => day.start.getHours() + i)

const TimeStamp = ({ time }) => (
  <div className="Program-timestamp">
    {time}:00
  </div>
)

const EventSlot = ({ eventId }) => {
  const { start, end } = events[eventId]

  const n = events.reduce((acc, event) =>
    acc + ((
      event.start < end && event.end > start
    ) ? 1 : 0), 0)

  const l = events.reduce((acc, event, i) =>
    acc + ((
      event.start < end && event.end > start && i < eventId
    ) ? 1 : 0), 0)

  return (
    <div
      className="Program-event-slot"
      style={{
        left: `${l / n * 100}%`,
        top: `${(start - day.start) / day.duration * 100}%`,
        width: `${1 / n * 100}%`,
        height: `${(end - start) / day.duration * 100}%`,
      }}
    >
      <EventCard {...events[eventId]} />
    </div>
  )
}

const Program = () => (
  <div className="Program-container">
    <h2 className="center">22 October 2018</h2>
    <div className="Program">
      {times.map((time, i) => <TimeStamp key={i} time={time} />)}
      <div className="Program-events">
        {events.map((_, i) => <EventSlot key={i} eventId={i} />)}
      </div>
    </div>
  </div>
)

export default Program
