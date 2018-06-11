import React, { Component } from 'react'

// import JobInfo from './components/JobInfo'

class Companies extends Component {
  render() {
    console.log(this.props.data.map(data => data.company.cover))
    return (
      <div>
        <h1>{this.props.data.map(data => data.company.name)}</h1>
          <table>
            <tr>
              <th>Resume</th>
              <th>Cover Letter</th>
              <th>Date Applied</th>
              <th>Date of Interview</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>{this.props.data.map(data => data.company.resume) ? "✓" : "X"}</td>
              <td>{this.props.data.map(data => data.company.cover) ? "✓" : "X"}</td>
              <td>{this.props.data.map(data => data.company.date_applied)}</td>
              <td>{this.props.data.map(data => data.company.date_interview)}</td>
              <td>{this.props.data.map(data => data.company.description)}</td>
            </tr>
          </table>
        <button>Add Job</button>
        <button>See Stats</button>
      </div>
    )
  }
}

export default Companies