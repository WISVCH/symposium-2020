import React from 'react'

import speakers from './data'

import {Row, Column, H2} from 'components/lib'
import Person from "../Person";
import {media} from "../../utilities/styles";

const host = [speakers[0]];
const eva = speakers.shift();
const onlySpeakers = [...speakers];
const SpeakerRow = Row.extend`
  ${media.small`
    justify-content: center;
  `}
  
`

speakers.unshift(eva);

export default () => (
    <div>
        <H2>The Host</H2>
        <SpeakerRow>
            {host.map(({img, name, company, title, revealed, ...rest}, i) => (

                <Column key={i} size={6} mSize={9}>
                    <Person
                        img={img}
                        name={name}
                        revealed={revealed}
                        title={title}
                        about={company}
                        vertical
                        large/>
                </Column>
            ))}
        </SpeakerRow>
        <H2>The Speakers</H2>
        <SpeakerRow>
            {onlySpeakers.map(({img, name, company, title, revealed, ...rest}, i) => (

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
        </SpeakerRow>
    </div>
)

speakers.unshift(eva);