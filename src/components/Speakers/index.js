import React from 'react'

import speakers from './data'

import {Row, Column, H2} from 'components/lib'
import Person from "../Person";

const host = [speakers[0]];
speakers.shift();

export default () => (
    <div>
        <H2>The Host</H2>
        <Row>
            {host.map(({img, name, company, title, revealed, ...rest}, i) => (

                <Column key={i} size={6} mSize={9}>
                    <Person
                        img={img}
                        name={name}
                        revealed={revealed}
                        title={company}
                        about={title}
                        vertical
                        large/>
                </Column>
            ))}
        </Row>
        <H2>The Speakers</H2>
        <Row>
            {speakers.map(({img, name, company, title, revealed, ...rest}, i) => (

                <Column key={i} size={6} mSize={9}>
                    <Person
                        img={img}
                        name={name}
                        revealed={revealed}
                        title={company}
                        about={title}
                        vertical
                        large/>
                </Column>
            ))}
        </Row>
    </div>
)
