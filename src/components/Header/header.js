import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <h2>
          Todo List
          <small> Explorer Mode</small>
        </h2>
      </header>
    )
  }
}

export default Header