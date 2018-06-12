import React, { Component } from 'react'

// import JobInfo from './components/JobInfo'

class Companies extends Component {
  constructor(props) {
    super(props);
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
    this.props.updateCart(company)
    // console.log('allrevies',this.state.allReviews)
  })
  .catch(function(error) {
    console.log('error')
  })
  }




  render() {
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
        {this.props.data.map((data, index) => {
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

{/*       
      // <div>
      //   <h1>{this.props.data.map(data => data.company.name)}</h1>
      //     <table>
      //       <tr>
      //         <th>Resume</th>
      //         <th>Cover Letter</th>
      //         <th>Date Applied</th>
      //         <th>Date of Interview</th>
      //         <th>Description</th>
      //       </tr>
      //       <tr>
      //         <td>{this.props.data.map(data => data.company.resume ? "✓" : "X")}</td>
      //         <td>{this.props.data.map(data => data.company.cover ? "✓" : "X")}</td>
      //         <td>{this.props.data.map(data => data.company.date_applied)}</td>
      //         <td>{this.props.data.map(data => data.company.date_interview)}</td>
      //         <td>{this.props.data.map(data => data.company.description)}</td>
      //       </tr>
      //      </table>
        //  <button>Add Job</button>
        //  <button>See Stats</button> */}