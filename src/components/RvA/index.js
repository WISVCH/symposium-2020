import React from 'react'

import {Row, Column} from 'components/lib'
import Person from 'components/Person'

import rva from './data'

const RvARow = Row.extend`
  justify-content: center;
`

const RvA = () => (
    <RvARow>
        {rva.map(({title, faculty, ...rest}, i) =>
            <Column key={i} size={6} mSize={9}>
                <Person revealed={true} title={`${title} | ${faculty}`} small vertical {...rest} />
            </Column>
        )}
    </RvARow>
);

export default RvA
