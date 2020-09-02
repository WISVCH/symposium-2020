import React from 'react'

import speakers from './data'

import { Row, Column } from 'components/lib'
import Person from "../Person";

export default () => (
  <div>
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
