import schaart  from 'assets/speakers/dennis_schaart.jpg'
import ridder   from 'assets/speakers/jeroen_de_ridder.jpg'
import klein    from 'assets/speakers/stefan_klein.jpg'
import brinkman from 'assets/speakers/willem_paul_brinkman.jpg'
import wehrens  from 'assets/speakers/rik_wehrens.jpg'
import leenstra from 'assets/speakers/b_leenstra.jpg'
import eva from 'assets/speakers/e_valk.jpg'

const parseTime = (h, m) =>
  new Date(Date.UTC(2018, 10, 22, h, m, 0))

const events = [
    // Example entry:
  // {
  //   active: false,
  //   start: parseTime( 9, 15),
  //   end:   parseTime( 9, 45),
  //   title: 'Opening',
  //   meta: 'Bernard Leenstra - The Host',
  //   speaker: 'Bernard Leenstra',
  //   event: 'bernard-leenstra',
  //   bgImage: leenstra,
  // },
  {
    active: true,
    start: parseTime(19, 0),
    end:   parseTime(19, 10),
    title: 'Opening',
    meta: 'Eva de Valk - Chair of the Day',
    speaker: 'Eva de Valk',
    event: 'eva-valk',
    bgImage: eva,
  },
  {
    active: false,
    start: parseTime(19, 10),
    end:   parseTime(19, 50),
    title: 'Speaker 1',
    meta: 'Talk by ...',
    speaker: 'Anonymous',
    event: 'speaker-1'
  },
  {
    active: false,
    start: parseTime(19, 50),
    end:   parseTime(20, 30),
    title: 'Speaker 2',
    meta: 'Talk by ...',
    speaker: 'Anonymous',
    event: 'speaker-2'
  },
  {
    active: false,
    start: parseTime(20, 30),
    end:   parseTime(20, 35),
    title: 'Break',
  },
  {
    active: false,
    start: parseTime(20, 35),
    end:   parseTime(21, 15),
    title: 'Speaker 3',
    meta: 'Talk by ...',
    speaker: 'Anonymous',
    event: 'speaker-3'
  },
  {
    active: true,
    start: parseTime(21, 15),
    end:   parseTime(22, 0),
    title: 'Panel Discussion',
    meta: 'Panel discussion between four guests: Jeroen van den Hoven, Ronald Prins, Vincent Warmerdam and Wouter Welling',
    event: 'panel-discussion',
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

export default events

export {
  events,
  day,
  times
}
