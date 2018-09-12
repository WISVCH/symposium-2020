import schaart  from 'assets/speakers/dennis_schaart.jpg'
import ridder   from 'assets/speakers/jeroen_de_ridder.jpg'
import klein    from 'assets/speakers/stefan_klein.jpg'
import brinkman from 'assets/speakers/willem_paul_brinkman.jpg'

const parseTime = (h, m) =>
  new Date(Date.UTC(2018, 10, 22, h, m, 0))

const events = [
  {
    revealed: true,
    start: parseTime( 9,  0),
    end:   parseTime( 9, 30),
    title: 'Registration',
  },
  {
    revealed: true,
    start: parseTime( 9, 30),
    end:   parseTime( 9, 45),
    title: 'Opening',
  },
  {
    revealed: false,
    start: parseTime( 9, 45),
    end:   parseTime(10, 15),
    title: 'Keynote Lecture',
    meta: 'To be announced',
  },
  {
    revealed: true,
    start: parseTime(10, 15),
    end:   parseTime(10, 45),
    title: 'Coffee break',
  },
  {
    revealed: true,
    start: parseTime(10, 45),
    end:   parseTime(11, 30),
    title: 'Image Analysis and Machine Learning for Early Diagnosis of Neurodegenerative Diseases',
    meta: 'Stefan Klein — Erasmus MC',
    speaker: 'Stefan Klein',
    event: 'stefan-klein',
    bgImage: klein,
  },
  {
    revealed: true,
    start: parseTime(11, 30),
    end:   parseTime(12, 45),
    title: 'Panel',
  },
  {
    revealed: true,
    start: parseTime(12, 45),
    end:   parseTime(13, 45),
    title: 'Lunch (with companies)',
  },
  {
    revealed: false,
    start: parseTime(13, 45),
    end:   parseTime(14, 30),
    title: 'Towards the Next Generation of Proton Therapy',
    meta: 'Dennis Schaart — Holland PTC',
    speaker: 'Dennis Schaart',
    event: 'dennis-schaart',
    bgImage: schaart,
  },
  {
    revealed: true,
    start: parseTime(14, 30),
    end:   parseTime(15, 15),
    title: 'Insight in Cancer with 3D Genome Interactions',
    meta: 'Jeroen de Ridder — UMC',
    speaker: 'Jeroen de Ridder',
    event: 'jeroen-de-ridder',
    bgImage: ridder,
  },
  {
    revealed: true,
    start: parseTime(15, 15),
    end:   parseTime(15, 45),
    title: 'Coffee break',
  },
  {
    revealed: true,
    start: parseTime(15, 45),
    end:   parseTime(16, 30),
    title: 'Towards Virtual Reality as a Medicine',
    meta: 'Willem-Paul Brinkman - TU Delft',
    speaker: 'Willem-Paul Brinkman',
    event: 'willempaul-brinkman',
    bgImage: brinkman,
  },
  {
    revealed: false,
    start: parseTime(16, 30),
    end:   parseTime(17, 15),
    title: 'Ethical Lecture',
    meta: 'To be announced',
  },
  {
    revealed: true,
    start: parseTime(17, 15),
    end:   parseTime(18,  0),
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

export default events

export {
  events,
  day,
  times
}
