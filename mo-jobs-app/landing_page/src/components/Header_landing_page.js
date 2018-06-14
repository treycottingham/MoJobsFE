import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Mo' Jobs, Less Probs!</h1>
        <img src={require('../assets/stock_photo.png')} />
      </header>
    )
  }
}

export default Header