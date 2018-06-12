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
      company: [],
      isCompanyLoaded: false,
      isHidden: true
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  fetchCompany = () => {
    const apiURL = 'http://localhost:3000/company';

    return fetch(apiURL)
      .then(response => response.json())
      .then(company => {
        this.setState({company,
                       isCompanyLoaded: true
                        })
      })
      .catch((err) => console.log('err', err))
  }

  componentDidMount() {
    this.fetchCompany()
    
  }

  // componentDidMount() {
  //   fetch(apiURL)
  //     .then(response => response.json())
  //     .then(companies => {
  //       this.setState({
  //         data: companies,
  //         isDataLoaded: true
  //       })
  //     })
  // }

  render() {
    const isCompanyLoaded = this.state.CompanyLoaded
    // console.log(this.state)
    return (
      <div className="App">
        <Header />
        <button onClick={(event) => {this.toggleHidden()}}>See Stats</button>
        {this.state.isHidden ? null : <Graph />}
        {isCompanyLoaded && <CompaniesDash data={this.state.data} />}
        <Footer />
      </div>
    )
  }
}

export default App