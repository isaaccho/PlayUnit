import React, { Component } from 'react';
import logo from './logo.svg';
import Profile from './Components/Profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
