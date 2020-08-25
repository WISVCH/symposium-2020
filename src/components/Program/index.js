import React from 'react'

import { H2 } from 'components/lib'
import Event from './Event'

import events from './data'
import leenstra from "../../assets/speakers/b_leenstra.jpg";

export default () => (
  <div>
    <H2>19 November 2020</H2>
    {events.map((event, i) =>
        {
            if (event.revealed) {
                return <Event key={i} {...event} />
            } else {
                const emptyEvent = event;
                emptyEvent.title = "Soon to be revealed";
                emptyEvent.meta = "";
                emptyEvent.speaker = "";
                emptyEvent.event = "";
                return <Event key={i} {...emptyEvent} />
            }
        }
    )}
  </div>
)
