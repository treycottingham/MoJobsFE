import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};



}

handleChange(event){
    // this.setState({value: event.target.value})
    console.log('handlechange', event.target.value)
}

handleSumbit(event){
    event.preventDefault();
}


render(){

    return (
        
      <form onSubmit={this.handleSubmit}>
        <label>Company Name</label>
        <input type='text'value={this.state.value} onChange ={this.handleChange}/>
        {/* <label>Resume</label>
        <input type='checkbox' name='resume' value='resume'/>
        <label>Cover Letter</label>
        <input type='checkbox' name='coverLetter' value='coverletter'/>
        <label>Date Applied</label>
        <input type='date' name='dateApplied' value='dateApplied'/>
      
        <label>Date of Interview</label>
        <input type='date' name='doi' value='doi'/>
      
        <label>Description</label>
        <input type='text' name='description' value='description'/>
        <label>Required Technologies</label>
        <input type='text' name='reqTech' value='reqTech'/> */}
        <input type="submit" value="Submit"/>
      </form>
    
    )
}
}

export default Form;
