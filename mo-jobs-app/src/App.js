import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Graph from './components/Graph'
import CompaniesDash from './components/CompaniesDash'

// const apiURL = './jobs.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isCompanyLoaded: false,
      isHidden: true
    }
  }

  // updateCompany = () => {
  //   this.setState(
  //     {isCompanyLoaded: true}
  //   )
  // }
 



  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  

  render() {
    // const isCompanyLoaded = this.state.isCompanyLoaded
    // console.log(this.state)
    return (
      <div className="App">
        <Header />
        <button onClick={(event) => {this.toggleHidden()}}>See Stats</button>
        {this.state.isHidden ? null : <Graph />}
        {/* {isCompanyLoaded && <CompaniesDash updateCompany = {this.updateCompany}/>} */}
        <CompaniesDash updateCompany = {this.updateCompany}/>}
        <Footer />
      </div>
    )
  }
}
export default App

