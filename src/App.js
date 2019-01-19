import React, { Component } from 'react';
import Content from './Content'
import './App.css';
import infa from './infa'

class App extends Component {
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
      <div className={this.state.dark ? "App" : "App white"}>
        {
          !getEmail ?
            <button onClick={this.getEmail} id="get_button">Get email</button> :
            <Content infa={infa} switchTheme={this.switchTheme} theme={dark}/>
        }
      </div>
    );
  }
}

export default App;
