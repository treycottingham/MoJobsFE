import React, { Component } from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Description from './components/Description'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Description />
          <Button />
            <Footer />
      </div>
    );
  }
}

export default App;

