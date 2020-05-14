import React from 'react'

import Person from 'components/Person'
import unknown from 'assets/speakers/unknown.png'

const host = [
  {
    img: unknown,
    name: 'To Be Announced',
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