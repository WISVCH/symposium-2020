import React from 'react'
import styled from 'styled-components'

import ProgramEventContent from './ProgramEventContent'

const ProgramEvent = styled.td`
  vertical-align: top;
`


export default ({ start, end, event, ...rest }) => (
    <ProgramEvent>
        <EventTime start={start} end={end} />
        {event
            ? <Link to={`/event/${event}`}>
                <ProgramEventContent {...rest} />
            </Link>
            : <ProgramEventContent {...rest} /> }
    </ProgramEvent>
)
