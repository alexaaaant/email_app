import React, { Component } from 'react';
import Switcher from "../Switcher/Switcher"
import Message from './Message/Message'
import './Content.css'

class Content extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openedMessage: null
    }
  }

  openMessage = (id) => {
    this.setState({
      openedMessage: id
    })
  }

  closeMessage = () => {
    this.setState({
      openedMessage: null
    })
  }


  render() {
    const { email, messages } = this.props.infa
    const { openedMessage } = this.state
    return (
      <div className='content'>
        <div className='content__email'>{email}</div>
        <div className='content__container'>
          {messages.map(item => {
            return (
              <Message key={item.id} openedMessage={openedMessage} openMessage={this.openMessage} closeMessage={this.closeMessage} item={item} />
            )
          })}
        </div>
        <Switcher styleParent='content__switcher' theme={this.props.theme} switchTheme={this.props.switchTheme} />
      </div>
    );
  }
}

export default Content;