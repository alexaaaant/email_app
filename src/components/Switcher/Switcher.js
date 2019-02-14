import React, { Component } from 'react';
import './Switcher.css'

class Switcher extends Component {
    render() {
        const {theme, switchTheme, styleParent} = this.props;
        return (
            <div className={"switch " + styleParent}>
                <span className='switch__theme'>{theme ? 'Dark' : 'Light'}</span>
                <input className='switch__input' type="checkbox" onClick={switchTheme}/>
                <span className="switch__slider-round" />
            </div>
        )
    }
}

export default Switcher