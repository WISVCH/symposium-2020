import React from 'react'

import { H2 } from 'components/lib'
import events from './data'

const colWidthTime = '10%'
const colWidthEvent = '45%'

const eventsList = Array.from(events)
const groupedEvents = eventsList.reduce(function (r, a) {
    r[a.start] = r[a.start] || [];
    r[a.start].push(a);
    return r;
}, Object.create(null));

const format = d =>
    d.toUTCString().split(' ')[4].substring(0, 5)


export default () => (
  <div>
    <H2>22 October 2018</H2>
      <table>
          <colgroup>
              <col width={colWidthTime}/>
              <col width={colWidthEvent}/>
              <col width={colWidthEvent}/>
          </colgroup>
          <thead>
            <tr>
              <th>Time</th>
              <th colSpan="2">Program</th>
            </tr>
          </thead>
      </table>
      <tbody>
      {/* ITERATE OVER KEYS OF DICTIONARY
      groupedEvents.map((key, i) =>
          <tr key={i}>
              <td>format()</td>
          </tr>
      )*/}
      </tbody>

  </div>
)
