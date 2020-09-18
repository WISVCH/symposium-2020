import React from 'react'
import styled from 'styled-components'

import { Row, Column } from 'components/lib'
import { Link } from 'react-router-dom'
import EventTime from './EventTime'
import EventContent from './EventContent'

const Event = styled.div`
  margin-bottom: 1em;

  vertical-align: top;
`

export default ({active, start, end, event, ...rest }) => (
  <Event>
      <Row>
          <Column mSize={4} size={2}>
              <EventTime start={start} end={end} />
          </Column>
          <Column mSize={12} size={10}>
              {event && active
                  ? <Link to={`/event/${event}`}>
                      <EventContent active {...rest} />
                    </Link>
                  : <EventContent {...rest} /> }
          </Column>
      </Row>
  </Event>
)
