import React, { Component } from 'react'

class Form extends React.Component {

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

    // let content = {
    //   company: data.companyName,
    //   resume: data.resume,
    //   cover_letter: data.coverLetter,
    //   date_applied: data.dateApplied,
    //   interview_date: dateInterview,
    //   description: data.description,


    // };

//     console.log('contnet', content)
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(content),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(resp => resp.json())
//     .then(allReviews => {
//       console.log('allreviews?', allReviews) 
//       this.setState(
//         {allReviews}
//       )
//       console.log('allrevies',this.state.allReviews)
//     })
//     .catch(function(error) {
//       console.log('error')
//     })
  
  }

handleSumbit = (e) => {
    e.preventDefault();
    console.log('submit_state', this.state)
    
    this.post(this.state)
    
    // this.props.onFormSubmit(this.state)
    // console.log('handleSubmit',e.target)
    // console.log('stateSubmit',this.state)
    // this.setState({ [e.target.name]: e.target.value })
    // this.post(this.state)
} 

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    // let model = this.state.model;

    // let resume = ((e.target.type == 'checkbox') && (e.target.name == 'resume'))
    // let coverLetter = ((e.target.type == 'checkbox') && (e.target.name == 'coverLetter'))

    // console.log('resume', resume)
    // console.log('coverLetter', coverLetter)

    // this.setState(
    //     {resume,
    //     coverLetter
    //     }
    // )
    

    // if(e.target.type == 'checkbox') {

    //   if(model[e.target.name] === false) {
    //     model[e.target.name] = true;
    //   } else if(model[e.target.name] === true) {
    //     model[e.target.name] = false;
    //   } else {
    //     // if the property has not be defined yet it should be true
    //     model[e.target.name] = true;
    //   }
    // } else {
    //   model[e.target.name] = e.target.value;
    // }

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
    <div>
       <form onSubmit={this.handleSumbit}> 
        <label>Company Name:</label>
        <input type='text' name ='companyName' value={this.state.companyName} onChange ={this.handleChange}/>      
        <label>Resume:</label>
        <input type='checkbox' name='resume' value={!this.state.resume} onClick = {this.onClickResume}/>
        
        <label>Cover Letter:</label>
          <input type='checkbox' name ='coverLetter' value={this.state.coverLetter}  onClick ={this.onClickCoverLetter}/>
        <label>Date Applied:</label>
          <input type='date' name ='dateApplied' value={this.state.dateApplied} onChange ={this.handleChange}/>
        <label>Date of Interview:</label>
          <input type='date' name='dateInterview' value={this.state.dateInterview} onChange ={this.handleChange}/>
        <label>Description:</label>
        <input type='text' name = 'description' value={this.state.description} onChange ={this.handleChange}/>
        <label>Required Technologies:</label>
        <input type='text' name='requiredTechnology' value={this.state.requiredTechnology} onChange ={this.handleChange}/>
        <input type="submit" value="Submit"/>  
      </form>
    </div> 

    )
}
}

export default Form;

  
