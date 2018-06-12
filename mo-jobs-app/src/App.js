import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Graph from './components/Graph'
import CompaniesDash from './components/CompaniesDash'

const apiURL = './jobs.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isDataLoaded: false,
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(companies => {
        this.setState({
          data: companies,
          isDataLoaded: true
        })
      })
  }

  render() {
    const isDataLoaded = this.state.isDataLoaded
    // console.log(this.state)
    return (
      <div className="App">
        <Header />
        <button onClick={(event) => {this.toggleHidden()}}>See Stats</button>
        {this.state.isHidden ? null : <Graph />}
        {isDataLoaded && <CompaniesDash data={this.state.data} />}
        <Footer />
      </div>
    )
  }
}

export default App