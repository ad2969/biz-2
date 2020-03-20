import React from 'react'
import { Icon } from 'antd'

class Input extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
    }
  }

  onChange (e) {
    this.setState({ text: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.onSendMessage(this.state.text)
    this.setState({ text: '' })
  }

  render () {
    return (
      <div className="Input">
        <hr/>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Write a reply..."
            autoFocus
          />
          <Icon type="smile" theme="twoTone"/>
        </form>
      </div>
    )
  }
}

export default Input