import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Input, Icon } from 'antd'

import * as ROUTES from 'constants/routes'
import Logo from 'assets/logo/bestbuy--white.png'
import HeaderButtons from 'assets/media/headerButtons.png'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.search = this.search.bind(this)
  }

  search () {
    this.props.history.push(ROUTES.SEARCH)
  }

  render () {
    return (
      <div className="Header">
        <div className="Header__toptop">
          <Link to={ROUTES.PRODUCTONE}><span>Order Status</span></Link>
          <Link to={ROUTES.PRODUCTTWO}><span>Blog</span></Link>
          <Link to={ROUTES.PRODUCTTHREE}><span>Best Buy for Business</span></Link>
          <span>Français</span>
        </div>
        <div className="Header__top">
          <div className="Header__top__logo">
            <Link to={ROUTES.LANDING}><img src={Logo} alt="logo"/></Link>
          </div>
          <Input.Search
            className="certain-category-icon"
            placeholder="Search best buy"
            onPressEnter={this.search}
            onSearch={this.search}/>
          <div className="Header__top__buttons">
            <img src={HeaderButtons} alt="head"/>
          </div>
        </div>
        <div className="Header__bottom">
          <span className="first">Shop <Icon type="down" /></span>
          <span>Brands <Icon type="down" /></span>
          <span>Deals <Icon type="down" /></span>
          <span>Service <Icon type="down" /></span>
        </div>

      </div>
    )
  }
}

export default withRouter(NavBar)
