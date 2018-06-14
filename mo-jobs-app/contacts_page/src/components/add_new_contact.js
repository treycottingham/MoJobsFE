import React from 'react'

class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
    this.setState({value: event.target.value})
    console.log('handlechange', event.target.value)
}

addContact = (g) => {
  console.log('gtargetid', g.target.id)

  const contactURL = `https://mo-jobs-database.herokuapp.com/contact/${g.target.id}`

  fetch(contactURL, {
    method: 'add',
   })
   .then(resp => resp.json())
   .then(newContact => {
     console.log('didthisadd?', newContact)

     this.setState({newContact})

   })
   .catch(function(error) {
     console.log('error')
   })
}

handleSumbit(event){
    event.preventDefault();
    //post
}

render(){

    return (
      <div className="form">
        <form>
        <label>
          Name:
          <input type='text' value={this.value}/>
        </label>
        <label>
          Position:
          <input type='text' value={this.value2}/>
        </label>
        <label>
          Location Met:
          <input type='text' value={this.value3}/>
        </label>
        <label>
          Date Last Interacted:
          <input type='date' value={this.value4}/>
        </label>
      </form>
        <td><button onClick = {this.addContact}>Add New Contact</button></td>
      </div>
    )
  }
}

export default Form;
