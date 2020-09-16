import React from 'react'

import Person from 'components/Person'
import eva from 'assets/speakers/e_valk.jpg'

const host = [
  {
    img: eva,
    name: 'Eva de Valk',
    title: 'Host',
  },
]

const Host = () => (
    <div className="Host">
      {host.map(({ title, ...rest }, i) =>
          <Person key={i} revealed={true} title={`${title}`} small horizontal {...rest} />
      )}
    </div>
)

export default Host