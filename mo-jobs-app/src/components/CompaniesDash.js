import React, { Component } from 'react'

// import JobInfo from './components/JobInfo'

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: [],
      isCompanyLoaded:false
    }  
}

fetchCompany = () => {
  // const apiURL = 'http://localhost:3000/company';
  const apiURL = 'https://mo-jobs-database.herokuapp.com/company';

  return fetch(apiURL)
    .then(response => response.json())
    .then(company => {
      this.setState({company,
                     isCompanyLoaded:true})
    }
  )
    .catch((err) => console.log('err', err))
}

deleteCompany = (e) => {
  console.log('ids', e)
  console.log('etarget', e.target)
  console.log('etarget', e.target.id)

  const url = `http://localhost:3000/reviews/${e.target.id}`

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
              <th>Resume</th>
              <th>Cover Letter</th>
              <th>Date Applied</th>
              <th>Date of Interview</th>
              <th>Description</th>
        </tr>
        {isCompanyLoaded && this.state.company.company.map((data, index) => {
          return(
          <tr>
          <td><button onClick = {this.deleteCompany}>Delete Company</button></td>  
          <td>{(data.resume ? "✓" : "X")}</td>
          <td>{(data.cover ? "✓" : "X")}</td>
          <td>{data.date_applied}</td>
          <td>{data.interview_date}</td>
          <td>{data.description}</td>
        </tr>
          )
        }
      )}
      </table>
      <div>
      <button>Add Job</button>
      <button>See Stats</button>        
      </div>
    </div>

    )
  }
}

export default Companies;

