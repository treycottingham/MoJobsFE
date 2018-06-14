import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Graph from './components/Graph'
import CompaniesDash from './components/CompaniesDash'
import Contact from './components/Contact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isCompanyLoaded: false,
      isHidden: true
    }
  }

  updateCompany = () => {
    this.setState(
      {isCompanyLoaded: true}
    )
  }
 
  // toggleHidden() {
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   })
  // }
  
  render() {
    // const isCompanyLoaded = this.state.isCompanyLoaded/
    // console.log(this.state)
    return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/landing" component= {LandingPage}/>
        <Route exact path="/company" component ={CompaniesDash} updateCompany={this.updateCompany}/>
        <Route exact path="/contact/" component ={Contact}/>
        </Switch>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App

