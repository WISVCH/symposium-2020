import React from 'react'
import './styles.css'

import EventCard from 'components/EventCard'

const events = [
  {
    revealed: true,
    start: new Date('2018-10-22 08:30:00'),
    end: new Date('2018-10-22 09:00:00'),
    title: 'Registration',
  },
  {
    revealed: true,
    start: new Date('2018-10-22 09:00:00'),
    end: new Date('2018-10-22 09:15:00'),
    title: 'Opening',
  },
  {
    revealed: false,
    start: new Date('2018-10-22 09:15:00'),
    end: new Date('2018-10-22 09:45:00'),
    title: 'Talk 1',
  },
  {
    revealed: false,
    start: new Date('2018-10-22 09:45:00'),
    end: new Date('2018-10-22 10:30:00'),
    title: 'Talk 2',
  },
  {
    revealed: true,
    start: new Date('2018-10-22 10:30:00'),
    end: new Date('2018-10-22 11:00:00'),
    title: 'Coffee break',
  },
  {
    revealed: false,
    start: new Date('2018-10-22 11:00:00'),
    end: new Date('2018-10-22 11:45:00'),
    title: 'Talk 3',
  },
  {
    revealed: false,
    start: new Date('2018-10-22 11:45:00'),
    end: new Date('2018-10-22 12:30:00'),
    title: 'Talk 4',
  },
  {
    revealed: true,
    start: new Date('2018-10-22 12:30:00'),
    end: new Date('2018-10-22 13:30:00'),
    title: 'Lunch',
  },
  {
    revealed: false,
    start: new Date('2018-10-22 13:30:00'),
    end: new Date('2018-10-22 14:15:00'),
    title: 'Talk 5',
  },
  {
    revealed: false,
    start: new Date('2018-10-22 14:15:00'),
    end: new Date('2018-10-22 15:00:00'),
    title: 'Talk 6',
  },
  {
    revealed: true,
    start: new Date('2018-10-22 15:00:00'),
    end: new Date('2018-10-22 15:30:00'),
    title: 'Coffee break',
  },
  {
    revealed: false,
    start: new Date('2018-10-22 15:30:00'),
    end: new Date('2018-10-22 16:15:00'),
    title: 'Talk 7',
  },
  {
    revealed: true,
    start: new Date('2018-10-22 16:15:00'),
    end: new Date('2018-10-22 17:00:00'),
    title: 'Panel',
  },
  {
    revealed: true,
    start: new Date('2018-10-22 17:00:00'),
    end: new Date('2018-10-22 18:00:00'),
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
