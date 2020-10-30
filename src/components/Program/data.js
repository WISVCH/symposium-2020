import eva from 'assets/speakers/e_valk.jpg'
import dimitris from 'assets/speakers/d_rizopoulos.jpg'
import marcel from 'assets/speakers/m_worring.jpg'
import jeroen from 'assets/speakers/jeroen_de_ridder.jpg'
import panel from 'assets/speakers/panel_real.jpg'
import pwc from 'assets/partners/pwc.png'

const parseTime = (h, m) =>
  new Date(Date.UTC(2018, 10, 22, h, m, 0))

const events = [
    // Example entry:
  // {
  //   active: false,
  //   revealed: true
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
    revealed: true,
    linkReg: true,
    start: parseTime( 18, 0),
    end:   parseTime( 19, 0),
    title: 'Case by PwC',
    meta: 'Data Analysis case by PwC with only a limited number of participants',
    speaker: 'PwC',
    event: 'pwc-case',
    bgImage: pwc,
  },
  {
    active: true,
    revealed: true,
    start: parseTime(19, 0),
    end:   parseTime(19, 10),
    title: 'Opening',
    meta: 'Eva de Valk - Chair of the Day',
    speaker: 'Eva de Valk',
    // FIXME: when speaker tiles are rendered from the home page the event that is linked is always the speaker name with hyphens, therefore they must match (see components/Speakers/Speaker.js).
    event: 'eva-de-valk',
    bgImage: eva,
    imgCopyright: 'Enith van Tongeren',
  },
  {
    active: true,
    revealed: true,
    start: parseTime(19, 10),
    end:   parseTime(19, 50),
    title: 'Multimedia Analytics',
    meta: 'Talk by Marcel Worring about multimedia analytics',
    speaker: 'Marcel Worring',
    event: 'marcel-worring',
    bgImage: marcel
  },
  {
    active: true,
    revealed: true,
    start: parseTime(19, 50),
    end:   parseTime(20, 30),
    title: 'Biostatistics',
    meta: 'Talk by Dimitris Rizopoulos about optimal scheduling of invasive procedures for patients',
    speaker: 'Dimitris Rizopoulos',
    event: 'dimitris-rizopoulos',
    bgImage: dimitris
  },
  {
    active: false,
    revealed: true,
    start: parseTime(20, 30),
    end:   parseTime(20, 35),
    title: 'Break',
  },
  {
    active: true,
    revealed: true,
    start: parseTime(20, 35),
    end:   parseTime(21, 15),
    title: 'Data, Identity and Privacy: the case for Design for Values\n',
    meta: 'Talk by Jeroen van den Hoven about the ethics of data analytics.',
    speaker: 'Jeroen van den Hoven',
    event: 'jeroen-van-den-hoven',
    bgImage: jeroen
  },
  {
    active: true,
    revealed: false,
    start: parseTime(21, 15),
    end:   parseTime(22, 0),
    title: 'Panel Discussion',
    meta: 'Panel discussion between four guests: Jeroen van den Hoven, Ronald Prins, Vincent Warmerdam and Wouter Welling',
    speaker: 'Panel Discussion',
    event: 'panel-discussion',
    bgImage: panel
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
