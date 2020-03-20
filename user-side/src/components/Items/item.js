import React from 'react'
import { Icon } from 'antd'
import COLORS from 'constants/colors'
import { Link } from 'react-router-dom'

export default class Item extends React.Component {
  render () {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < this.props.text.stars) stars.push(<Icon type="star" theme="filled" style={{ color: COLORS.yellowStar }} />)
      else stars.push(<Icon type="star" style={{ color: COLORS.yellowStar }} />)
    }
    return (
      <div className="Item">
        {this.props.link !== null ? <Link to={this.props.link}><img src={this.props.req} alt="pic" /></Link> : <img src={this.props.req} alt="pic" />}
        <div className="desc">
          <h4>{this.props.text.name}</h4>
          <span className="rate">{stars} {`(${this.props.text.reviews})`}</span>
        </div>
        <div className="price left">${this.props.text.price}</div>
        <span className="left"><Icon type="check-circle" theme="filled" style={{ color: 'green' }}/> &nbsp; Available online</span>
        <span className="left"><Icon type="check-circle" theme="filled" style={{ color: 'green' }}/> &nbsp; Available at nearby stores</span>
      </div>
    )
  }
}
