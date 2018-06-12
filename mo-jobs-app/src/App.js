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
      company: [],
      isCompanyLoaded: false,
      isHidden: true
    }
  }

  updateCompany = (company) =>{
    this.setState(
      {company}
    )
  }
 



  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  fetchCompany = () => {
    // const apiURL = 'http://localhost:3000/company';
    const apiURL = 'https://mo-jobs-database.herokuapp.com/company';

    return fetch(apiURL)
      .then(response => response.json())
      .then(company => {
        this.setState({company,
                       isCompanyLoaded: true
                        })
      console.log('state', this.state.company.company)
      console.log('true', this.state.isCompanyLoaded)
      }
    )
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
    const isCompanyLoaded = this.state.isCompanyLoaded
    // console.log(this.state)
    return (
      <div className="App">
        <Header />
        <button onClick={(event) => {this.toggleHidden()}}>See Stats</button>
        {this.state.isHidden ? null : <Graph />}
        {isCompanyLoaded && <CompaniesDash updateCompany = {this.updateCompany} data={this.state.company.company} />}
        <Footer />
      </div>
    )
  }
}

export default App