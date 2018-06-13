import React from 'react'
import './styles.css'

import lumc from 'assets/partners/lumc.jpg'
import emc from 'assets/partners/emc.png'
import tut from 'assets/partners/utwente.png'
import tue from 'assets/partners/tueindhoven.png'
import tud from 'assets/partners/tudelft.png'
import philips from 'assets/partners/philips.svg'
import tno from 'assets/partners/tno.png'
import dsm from 'assets/partners/dsm.png'
import maasstad from 'assets/partners/maasstad.png'

const cva = [
  {
    image: tud,
    company: 'TU Delft',
    name: 'Prof.dr.ir. T.H.J.J. van der Hagen',
    role: 'Rector Magnificus'
  }, {
    image: dsm,
    company: 'DSM',
    name: 'F. Seibesma',
    role: 'CEO & Chairman Managing Board'
  }, {
    image: tue,
    company: 'TU Eindhoven',
    name: 'Prof.dr.ir. F.P.T. Baaijens',
    role: 'Rector Magnificus'
  }, {
    image: emc,
    company: 'EMC',
    name: 'mr. P.G. de Vries',
    role: 'Chairman Supervisory Board'
  }, {
    image: lumc,
    company: 'LUMC',
    name: 'dr. C.A.Linse',
    role: 'Chairman Supervisory Board'
  }, {
    image: philips,
    company: 'Royal Philips',
    name: 'Drs. F. A. van Houten',
    role: 'President & CEO of Executive Committee'
  }, {
    image: tno,
    company: 'TNO',
    name: 'Drs. P. de Krom',
    role: 'Chairman board of directors'
  }, {
    image: tut,
    company: 'TU Twente',
    name: 'Prof.dr. T.T.M. Palstra',
    role: 'Rector Magnificus'
  }, {
    image: maasstad,
    company: 'Maasstad ziekenhuis',
    name: 'Drs. P.M. Langenbach',
    role: 'Chairman board of directors'
  },
]

const Member = ({ image, company, name, role }) => (
  <div className="CvAMember">
    <div className="CvAMember-Left">
      <img className="CvAMember-Image" src={image} alt={company} />
    </div>
    <div className="CvAMember-Right">
      <h3 className="CvAMember-Name">{name.toLowerCase()}</h3>
      <p className="CvAMember-Tagline">{role} at {company}</p>
    </div>
  </div>
)

const CvA = () => (
  <div className="CvA">
    {cva.map((props, i) => <Member key={i} {...props} />)}
  </div>
)

export default CvA
