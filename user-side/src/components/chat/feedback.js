import React from 'react'
import { Icon } from 'antd'
import COLORS from 'constants/colors'

export default class ChatFeedback extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stars: 0,
      rated: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleHover (val) {
    this.setState({
      stars: val === 0 ? 0 : val + 1,
    })
  }

  handleSubmit (val) {
    if (this.state.rated) return
    this.setState({
      stars: val + 1,
    })
    setTimeout(() => {
      this.setState({
        rated: true,
      })
    }, 200)
    setTimeout(() => {
      this.props.chatFeedbackFunction(false)
    }, 1500)
    setTimeout(() => {
      this.setState({ stars: 0, rated: false })
    }, 2000)
  }

  render () {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < this.state.stars) {
        stars.push(
          <Icon
            type="star"
            theme="filled"
            key={`starfeedback-${i}`}
            style={{ color: COLORS.yellowStar }}
            onClick={() => { this.handleSubmit(i) }}
            onMouseOver={() => { this.handleHover(i) }}
            onMouseOut={() => { this.handleHover(0) }}/>)
      } else {
        stars.push(
          <Icon
            type="star"
            key={`starfeedback-${i}`}
            style={{ color: COLORS.yellowStar }}
            onClick={() => { this.handleSubmit(i) }}
            onMouseOver={() => { this.handleHover(i) }}
            onMouseOut={() => { this.handleHover(0) }}
          />)
      }
    }
    return (
      <div className={this.props.active ? 'Chat-Feedback chat--active' : 'Chat-Feedback chat--inactive'}>
        {this.state.rated
          ? (<h1>Thank You!</h1>)
          : (
            <React.Fragment>
              <span className="close" onClick={() => { this.props.chatFeedbackFunction(false) }}>x</span>
              <h1>Please give our guru your feedback!</h1>
              <span className="rate">{stars}</span>
            </React.Fragment>
          )}
      </div>
    )
  }
}