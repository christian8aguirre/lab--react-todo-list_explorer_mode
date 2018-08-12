import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <h2>
          Todo List
          <small> Normal Mode</small>
        </h2>
      </header>
    )
  }
}

export default Header