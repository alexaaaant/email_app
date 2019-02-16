import React, { Component } from 'react';
import Content from '../Content/Content'
import './Main.css';
import GetButton from '../GetButton/GetButton'
import infa from '../../infa'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      getEmail: false,
      infa: {},
      dark: true
    }
  }

  switchTheme = () => {
    this.setState(prevState => ({
      dark: !prevState.dark
    }))
  }

  getEmail = () => {
    this.setState(prevState => ({
      getEmail: !prevState.getEmail,
      infa: infa
    }))
  }

  render() {
    const { getEmail, infa, dark } = this.state
    return (
      <div className={dark ? 'Main' : 'Main white'}>
        {
          getEmail ?
            <Content 
            infa={infa} 
            switchTheme={this.switchTheme} 
            theme={dark}
            /> :
            <GetButton 
            getEmail={this.getEmail}
            />
        }
      </div>
    );
  }
}

export default Main;
