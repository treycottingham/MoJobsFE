import React, { Component } from 'react';
import Form from './Form';
import { Link } from "react-router-dom";

class CompaniesDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: [],
      isCompanyLoaded:false
    }  
}

fetchCompany = () => {

  const apiURL = 'https://mo-jobs-database.herokuapp.com/company';

  return fetch(apiURL)
    .then(response => response.json())
    .then(company => {
      this.setState({company,
      isCompanyLoaded:true})
      console.log('insidefetch',this.state.company)
    }
  )
    .catch((err) => console.log('err', err))
}

deleteCompany = (e) => {
  console.log('etargetid', e.target.id)

  const url = `https://mo-jobs-database.herokuapp.com/company/${e.target.id}`

  fetch(url, {
     method: 'delete',
   })
   .then(resp => resp.json())
   .then(company => {
     console.log('didthisdelet?', company) 
  
     this.setState({company})

   })
   .catch(function(error) {
     console.log('error')
   })
  }

  setCompany = (company) => {
    console.log('setCompany', company)
    this.setState({company})
  }
  
  componentDidMount() {
    this.fetchCompany()
    
  }
  

  render() {

    const isCompanyLoaded = this.state.isCompanyLoaded

    return (
   <div> 
      <table>
        <tr>
              <th>Delete Company</th>
              <th>Company</th>  
              <th>Resume</th>
              <th>Cover Letter</th>
              <th>Date Applied</th>
              <th>Date of Interview</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contacts</th>
        </tr>
        {isCompanyLoaded && this.state.company.company.map((data, index) => {
          return(
          <tr>
          <td><button onClick = {this.deleteCompany} id={data.id}>Delete Company</button></td>
          <td>{data.company}</td>  
          <td>{(data.resume ? "✓" : "X")}</td>
          <td>{(data.cover ? "✓" : "X")}</td>
          <td>{data.date_applied.substring(0,10)}</td>
          <td>{data.interview_date.substring(0,10)}</td>
          <td>{data.description}</td>
          <td>{data.technologies}</td>
          {/* <Link to="/contact" id={data.id}>Check Out Yo Dashboard</Link> */}
          <Link to={`/contact/${data.id}`}>Check Out Yo Dashboard</Link>
          {/* <Link to={`/ideas/${ this.props.testValue }`}>Create Idea</Link> */}

        </tr>
          )
        }
      )}
      </table>
      <div>
              
      </div>
      <Form setCompany={this.setCompany}/>
    </div>

    )
  }
}

export default CompaniesDash;