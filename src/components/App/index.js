import React from 'react'
import './styles.css'
import { Route, Switch } from 'react-router'

import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

import HomePage from 'pages/home'
import ProgramPage from 'pages/program'
import EventPage from 'pages/event'
import SpeakersPage from 'pages/speakers'
import TicketsPage from 'pages/tickets'

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/program" component={ProgramPage} />
      <Route path="/program/:event" component={EventPage} />
      <Route path="/speakers" component={SpeakersPage} />
      <Route path="/tickets" component={TicketsPage} />
    </Switch>
    <Footer />
  </div>
)

export default App
