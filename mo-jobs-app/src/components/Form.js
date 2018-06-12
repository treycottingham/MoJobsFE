import React, { Component } from 'react'

// import JobInfo from './components/JobInfo'

class Form extends Component {
  constructor(props) {
    super(props);

}

render(){

    return (
      <form action='' method='post'>
        <label for='POST'>Company Name</label>
        <input type='text' name='companyName'>
      </form>
      <form>
        <label for='POST'>Resume</label>
        <input type='checkbox' name='resume'>
      </form>
      <form>
        <label for='POST'>Cover Letter</label>
        <input type='checkbox' name='coverLetter'>
      </form>
      <form>
        <label for='POST'>Date Applied</label>
        <input type='date' name='dateApplied'>
      </form>
      <form>
        <label for='POST'>Date of Interview</label>
        <input type='date' name='doi'>
      </form>
      <form>
        <label for='POST'>Description</label
        <input type='text' name='description'>
      </form>
      <form>
        <label for='POST'>Required Technologies</label>
        <input type='text' name='reqTech'>
      </form>
    )
}

export default Form;
