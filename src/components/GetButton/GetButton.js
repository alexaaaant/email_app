import React, { Component } from 'react';
import './GetButton.css'

class GetButton extends Component {
    render() {
        const { getEmail } = this.props
        return (
            <button onClick={getEmail} className="get-button">Get email</button>
        )
    }
}

export default GetButton