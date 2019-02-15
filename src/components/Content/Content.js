import React, { Component } from 'react';
import Switcher from "../Switcher/Switcher"
import './Content.css'

class Content extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openMessage: null
    }
  }

  openMessage = (id) => {
    this.setState({
      openMessage: id
    })
  }

  closeMessage = () => {
    this.setState({
      openMessage: null
    })
  }


  render() {
    const { email, messages } = this.props.infa
    const { openMessage } = this.state
    return (
      <div className='content'>
        <div className='content__email'>{email}</div>
        <div className='content__container'>
          {messages.map(item => {
            return (
              <div className={openMessage !== item.id ? 'message_container' : 'message_container open'} key={item.id}>
                <div className='from'>{item.from}</div>
                <div className='message' onClick={() => this.openMessage(item.id)}>{item.message}</div>
                <div className='time' onClick={this.closeMessage}>{item.time}</div>
              </div>
            )
          })}
        </div>
          <Switcher styleParent='content__switcher' theme={this.props.theme} switchTheme={this.props.switchTheme}/>
      </div>
    );
  }
}

export default Content;