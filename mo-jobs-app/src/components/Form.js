import React, { Component } from 'react'

class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
    this.setState({value: event.target.value})
    console.log('handlechange', event.target.value)
}

handleSumbit(event){
    event.preventDefault();
}


render(){

    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          Company Name:
          <input type='text' value={this.state.value} onChange ={this.handleChange}/>
        </label>
        <label>
          Resume:
          <input type='checkbox' value={this.state.value} onChange ={this.handleChange}/>
        </label>
        <label>
          Cover Letter:
          <input type='checkbox' value={this.state.value} onChange ={this.handleChange}/>
        </label>
        <label>
          Date Applied:
          <input type='date' value={this.state.value} onChange ={this.handleChange}/>
        </label>
        <label>
          Date of Interview:
          <input type='date' value={this.state.value} onChange ={this.handleChange}/>
        </label>
        <label>
          Description:
          <input type='text' value={this.state.value} onChange ={this.handleChange}/>
        </label>
        <label>
          Required Technologies:
          <input type='text' value={this.state.value} onChange ={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>

    )
}
}

export default Form;
