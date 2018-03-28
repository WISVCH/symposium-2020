import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

import { NavLink } from 'react-router-dom'

import * as navigation from 'selectors/navigation'

import logo from 'assets/logo/symposium_logo_white.svg'

const NavigationLink = ({ children, ...rest }) => (
  <NavLink className="Navigation-link" activeClassName="Navigation-link active" {...rest}>{children}</NavLink>
)

const Navigation = ({ transparent, down }) => (
  <div className={classNames('Navigation', { transparent, down })}>
    <div className="wrapper">
      <NavLink exact to="/">
        <img className="Navigation-logo" src={logo} alt="Care for the Future - Improving health bit by bit" />
      </NavLink>
      <div className="Navigation-links">
        <NavigationLink exact to="/">Home</NavigationLink>
        <NavigationLink to="/program">Program</NavigationLink>
        <NavigationLink to="/speakers">Speakers</NavigationLink>
        <NavigationLink to="/tickets">Tickets</NavigationLink>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  down: navigation.isDown(state),
  transparent: navigation.isTransparent(state),
  pathname: navigation.getPathname(state)
})

export default connect(
  mapStateToProps
)(Navigation)
