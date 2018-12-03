import React, { Component } from 'react';
import Main from './Main.js';
import Navbar from './Navbar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Navbar />
      </div>
    );
  }
}

export default App;
