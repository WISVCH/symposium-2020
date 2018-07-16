import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from 'pages/home'
import ProgramPage from 'pages/program'
import EventPage from 'pages/event'
import SpeakersPage from 'pages/speakers'
import TicketsPage from 'pages/tickets'

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/program" component={ProgramPage} />
    <Route path="/program/:event" component={EventPage} />
    <Route path="/speakers" component={SpeakersPage} />
    <Route path="/tickets" component={TicketsPage} />
    <Route path='/history' component={() => window.location.replace('https://symposium.ch.tudelft.nl/2017/')}/>
  </Switch>
)
