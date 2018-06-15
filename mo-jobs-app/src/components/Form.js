import React, { Component } from 'react'
import { Button, Form, TextArea, Input } from 'semantic-ui-react'

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                companyName: '',
                resume: false,
                coverLetter: false,
                dateApplied: '',
                dateInterview:'',
                description:'',
                requiredTechnology:''
    }
}

post = (data) => {
    console.log('data', data)

    const url = `https://mo-jobs-database.herokuapp.com/company/`

    let content = {
      company: data.companyName,
      resume: data.resume,
      cover_letter: data.coverLetter,
      date_applied: data.dateApplied,
      interview_date: data.dateInterview,
      description: data.description,
      technologies: data.requiredTechnology
    };

    console.log('contnet', content)

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(company => {
      console.log('response', company) 
      this.props.setCompany(company)
    })
    .catch(function(error) {
      console.log('error')
    })
  
  }

handleSumbit = (e) => {
    e.preventDefault();
    console.log('submit_state', this.state)
    
    this.post(this.state)
} 

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    

    console.log('state', this.state)
  }
  

    onClickResume = (e) => {
        this.setState({resume: e.target.checked});
        // console.log('event', e.target)
        // console.log('resumestate', this.state.resume)
    }
    onClickCoverLetter = (e) => {
        this.setState({coverLetter: e.target.checked});
        // console.log('event', e.target)
        // console.log('resumestate', this.state.resume)
    }



render(){

    return (
       <Form onSubmit={this.handleSumbit} className="col-12"> 
        <label>Company Name:</label>
        <Input type='text' name ='companyName' value={this.state.companyName} onChange ={this.handleChange} id='transparent-input'/>      
        <Form.Group inline id="checkboxes">
        {/* <div class="check"> */}
        <label>Resume:</label>
        <Form.Checkbox name='resume' value={!this.state.resume} onClick = {this.onClickResume}/>
        <label>Cover Letter:</label>
        <Form.Checkbox name ='coverLetter' value={this.state.coverLetter}  onClick ={this.onClickCoverLetter}/>
        </Form.Group>
        {/* </div> */}

        <label>Date Applied:</label>
        <Input type='date' name ='dateApplied' value={this.state.dateApplied} onChange ={this.handleChange} id='transparent-input'/>
        
        <label>Date of Interview:</label>
        <Input type='date' name='dateInterview' value={this.state.dateInterview} onChange ={this.handleChange}  id='transparent-input'/>
        
        <label>Description:</label>
        <TextArea type='text' name = 'description' value={this.state.description} onChange ={this.handleChange} id='transparent-input'/>
        
        <label>Required Technologies:</label>
        <TextArea type='text' name='requiredTechnology' value={this.state.requiredTechnology} onChange ={this.handleChange} id='transparent-input'/>
        
        <Button color="blue" type="submit" id="submit-button">Add Job</Button>
      </Form>
        )
    }
}

export default InputForm;

  
