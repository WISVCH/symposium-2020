import React from 'react'

import {Row, Column} from 'components/lib'
import Person from 'components/Person'

import rva from './data'

const RvA = () => (
    <Row>
        <div className="RvA">
            {rva.map(({title, faculty, ...rest}, i) =>
                <Column key={i} size={6} mSize={9}>
                    <Person revealed={true} title={`${title} | ${faculty}`} small vertical {...rest} />
                </Column>
            )}
        </div>
    </Row>
);

export default RvA


// {commissioners.map(({ title, ...rest }, i) =>
//     <Column key={i} size={4} mSize={6}>
//         <Person
//             revealed={true}
//             title={title}
//             vertical
//             small
//             className="Commissioner"
//             {...rest}
//         />
//     </Column>
// )}