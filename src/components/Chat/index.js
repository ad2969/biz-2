import React from 'react'
import Input from './input'
import { Icon } from 'antd'

export default class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      currentMember: {
        username: this.randomName(),
        color: this.randomColor(),
        id: 'null',
      },
    }

    this.handleClose = this.handleClose.bind(this)

    // SCALEDRONE SETUP

    this.drone = new window.Scaledrone('448LX1LCXbsGUhUI', {
      data: this.state.currentMember,
    })

    this.drone.on('open', error => {
      if (error) {
        return console.error(error)
      }
      const member = this.state.currentMember
      member.id = this.drone.clientId
      this.setState({ currentMember: member })
    })

    const room = this.drone.subscribe('observable-room')

    room.on('data', (data, member) => {
      const messages = this.state.messages
      messages.push({ member, text: data })
      this.setState({ messages })
    })
  }

  componentDidUpdate () {
    const chatbox = document.getElementById('chatbox')
    chatbox.scrollTop = chatbox.scrollHeight
  }

  randomName () {
    const adjectives = [ 'autumn', 'hidden', 'bitter', 'misty', 'silent', 'empty', 'dry', 'dark', 'summer', 'icy', 'delicate', 'quiet', 'white', 'cool', 'spring', 'winter', 'patient', 'twilight', 'dawn', 'crimson', 'wispy', 'weathered', 'blue', 'billowing', 'broken', 'cold', 'damp', 'falling', 'frosty', 'green', 'long', 'late', 'lingering', 'bold', 'little', 'morning', 'muddy', 'old', 'red', 'rough', 'still', 'small', 'sparkling', 'throbbing', 'shy', 'wandering', 'withered', 'wild', 'black', 'young', 'holy', 'solitary', 'fragrant', 'aged', 'snowy', 'proud', 'floral', 'restless', 'divine', 'polished', 'ancient', 'purple', 'lively', 'nameless' ]
    const nouns = [ 'waterfall', 'river', 'breeze', 'moon', 'rain', 'wind', 'sea', 'morning', 'snow', 'lake', 'sunset', 'pine', 'shadow', 'leaf', 'dawn', 'glitter', 'forest', 'hill', 'cloud', 'meadow', 'sun', 'glade', 'bird', 'brook', 'butterfly', 'bush', 'dew', 'dust', 'field', 'fire', 'flower', 'firefly', 'feather', 'grass', 'haze', 'mountain', 'night', 'pond', 'darkness', 'snowflake', 'silence', 'sound', 'sky', 'shape', 'surf', 'thunder', 'violet', 'water', 'wildflower', 'wave', 'water', 'resonance', 'sun', 'wood', 'dream', 'cherry', 'tree', 'fog', 'frost', 'voice', 'paper', 'frog', 'smoke', 'star' ]
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    return adjective + noun
  }

  randomColor () {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)
  }

  renderMessage (message) {
    const rand = this.randomColor()
    const { member, text } = message
    const { currentMember } = this.state
    const messageFromMe = member.id === currentMember.id
    const className = messageFromMe
      ? 'Messages-message currentMember' : 'Messages-message'
    return (
      <li className={className} key={`${message}-${rand}`}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color ? member.clientData.color : member.color }}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    )
  }

    onSendMessage = (message) => {
      this.drone.publish({
        room: 'observable-room',
        message,
      })
    }

    handleClose () {
      this.props.chatFunction(false)
    }

    render () {
      const { messages } = this.state
      return (
        <div className={this.props.active ? 'Chat chat--active' : 'Chat chat--inactive'}>
          <div className="Chat__header">
            <h3>Chat with an expert!</h3>
            <Icon type="phone" theme="filled" className="icon" style={{ color: 'white' }}/>
            <span className="close" onClick={this.handleClose}>x</span></div>
          <ul className="Messages-list" id="chatbox">
            {messages.map(m => this.renderMessage(m))}
          </ul>
          <Input onSendMessage={this.onSendMessage} />
        </div>
      )
    }
}
