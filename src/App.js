import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header'
import Body from './components/Body/body'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
