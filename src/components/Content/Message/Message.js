import React, { Component } from 'react';
import "./Message.css"

class Message extends Component {
    render() {
        const {openMessage,openedMessage, item, closeMessage} = this.props
        return (
            <div className={openedMessage !== item.id ? 'messages' : 'messages open'}>
                <div className='messages__from'>{item.from}</div>
                <div className='messages__item' onClick={() => openMessage(item.id)}>{item.message}</div>
                <div className='messages__time' onClick={closeMessage}>{item.time}</div>
            </div>
        )
    }
}

export default Message;