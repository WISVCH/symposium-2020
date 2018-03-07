import React from 'react'
import './styles.css'

import EventCard from 'components/EventCard'

import coffee from 'assets/program/coffee.png'

const events = [
  {
    start: new Date('2018-10-22 09:00:00'),
    end: new Date('2018-10-22 10:00:00'),
    title: 'Coffee & Tea',
    bgImage: coffee,
    bgColor: '#eea5bd',
  },
  {
    start: new Date('2018-10-22 10:00:00'),
    end: new Date('2018-10-22 10:30:00'),
    title: 'Opening keynote',
  },
  {
    start: new Date('2018-10-22 10:30:00'),
    end: new Date('2018-10-22 11:15:00'),
    title: 'Probabilistic cancer treatment',
  },
  {
    start: new Date('2018-10-22 10:30:00'),
    end: new Date('2018-10-22 11:15:00'),
    title: 'Visualizing with virtual patients',
  },
  {
    start: new Date('2018-10-22 11:15:00'),
    end: new Date('2018-10-22 12:00:00'),
    title: null,
  },
  {
    start: new Date('2018-10-22 11:15:00'),
    end: new Date('2018-10-22 12:00:00'),
    title: null,
  },
  {
    start: new Date('2018-10-22 12:00:00'),
    end: new Date('2018-10-22 13:00:00'),
    title: 'Lunch',
  },
  {
    start: new Date('2018-10-22 13:00:00'),
    end: new Date('2018-10-22 19:00:00'),
    title: 'Afternoon program',
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

const times = [
  '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'
]

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
