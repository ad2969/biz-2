import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import SignOutButton from 'components/buttons/signOutButton'
import * as ROUTES from 'constants/routes'
import { Icon } from 'antd'

import Logo from 'assets/logo/bestbuy--white.png'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.search = this.search.bind(this)
  }

  search () {
    this.props.history.push(ROUTES.HOME)
  }

  render () {
    return (
      <div className="Header">
        <div className="Header__toptop">
          <span>Account</span>
          <span>Help</span>
        </div>
        <div className="Header__top">
          <div className="Header__top__logo">
            <Link to={ROUTES.LANDING}><img src={Logo} alt="logo"/></Link>
          </div>
          <div><h1>Welcome, Gurus!</h1></div>
          <div className="Header__top__buttons">
            <SignOutButton />
          </div>
        </div>
        <div className="Header__bottom">
          <span className="first">Shop <Icon type="down" /></span>
          <span>Users <Icon type="down" /></span>
          <span>History <Icon type="down" /></span>
          <span>Support <Icon type="down" /></span>
        </div>

      </div>
    )
  }
}

export default withRouter(NavBar)

