import React from 'react'

import { H6 } from 'components/lib'
import {media} from "../../utilities/styles";

const format = d =>
  d.toUTCString().split(' ')[4].substring(0, 5)

const EventTime = H6.extend`
  display: inline-block;
  width: 8em;
  margin: 0;

  vertical-align: top;
  ${media.small`
    width: 2em;
  `}
`

export default ({start, end}) =>
  <EventTime>
    {format(start)} - {format(end)}
  </EventTime>
