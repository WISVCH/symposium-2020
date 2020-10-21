import React from 'react'
import styled from 'styled-components'

import { Row, Column } from 'components/lib'
import { Link } from 'react-router-dom'
import EventTime from './EventTime'
import EventContent from './EventContent'
import {media} from "../../utilities/styles";

const Event = styled.div`
  margin-bottom: 1em;

  vertical-align: top;
`
const Column2 = Column.extend`
    ${media.small`
        width: ${props => 90 * props.size / props.theme.columns.count}%;
      `}
`

const Column1 = Column.extend`
    ${media.small`
        width: ${props => 100 * props.size / props.theme.columns.count}%;
      `}
`

export default ({active, start, end, event, ...rest }) => (
  <Event>
      <Row>
          <Column2 mSize={4} size={2}>
              <EventTime start={start} end={end} />
          </Column2>
          <Column1 mSize={12} size={10}>
              {event && active
                  ? <Link to={`/event/${event}`}>
                      <EventContent active {...rest} />
                    </Link>
                  : <EventContent {...rest} /> }
          </Column1>
      </Row>
  </Event>
)
