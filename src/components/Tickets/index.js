import React from 'react'
import classNames from 'classnames'
import './styles.css'

import student from 'assets/tickets/student.svg'
import alumnus from 'assets/tickets/alumnus.svg'
import knvi from 'assets/tickets/knvi.svg'
import external from 'assets/tickets/external.svg'

const options = [
  {
    available: false,
    type: 'Student',
    price: 5,
    image: student,
  },
  {
    available: false,
    type: 'Alumni / TU Delft employee',
    price: 25,
    image: alumnus,
  },
  {
    available: false,
    type: 'KNVI member',
    price: 25,
    image: knvi,
  },
  {
    available: false,
    type: 'External',
    price: 60,
    image: external,
  },
]

const TicketOption = ({ available, type, image, price }) => (
  <div className={classNames('TicketOption', 'light', 'shadow', 'rounded')}>
    <div
      className="TicketOption-image"
      style={{ backgroundImage: `url(${image})`}}
    />
    <div className="TicketOption-header">
      <h2 className="TicketOption-title">{type}</h2>
    </div>
    <div className="TicketOption-price">€{price}</div>
    <div className="TicketOption-footer">
      { available
        ? <button className="TicketOption-button">Buy now</button>
        : <button className="TicketOption-button" disabled>Sold out</button>}
    </div>
  </div>
)

const Tickets = () => (
  <div className="Tickets">
    {options.map((option, i) => <TicketOption key={i} {...option} />)}
  </div>
)

export default Tickets
