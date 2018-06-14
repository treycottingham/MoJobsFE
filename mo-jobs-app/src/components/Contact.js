import React from 'react'

class Contact extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isContactsLoaded: false
    }  
}


fetchContacts = () => {
    // console.log('idinsideFetch', this.props.match.params.value)
    // const contactURL = `https://mo-jobs-database.herokuapp.com/contact/${this.props.match.params.value}`;

    // const url = `http://localhost:3000/reviews/${e.target.id}`
    const contactURL = 'https://mo-jobs-database.herokuapp.com/contact';
    
    return fetch(contactURL)
      .then(response => response.json())
      .then(contacts => {
        console.log('contactsresp', contacts)
        this.setState({contacts,
        isContactsLoaded: true
        })
        console.log('contactsrespAfterstate', contacts)
      }

    )
      .catch((err) => console.log('err', err))
  }

deleteContact = (e) => {
        console.log('etargetid', e.target.id)
      
        const contactURL = `https://mo-jobs-database.herokuapp.com/contact/${e.target.id}`
        
        fetch(contactURL, {
        method: 'delete',
  })
        .then(resp => resp.json())
        .then(contact => {
        // console.log('didthisdelete?', contact) 
      
        this.setState({contact})
        
      
      })
        .catch(function(error) {
        console.log('error')
      })  
}

// print = (props) => {
// console.log('props', props)
// }

componentDidMount() {
    this.fetchContacts()
    console.log('id', this.props.match.params.value)
    
    }


render() {
  
  const isContactsLoaded = this.state.isContactsLoaded

    return (
      <div className="chart">
      <tr> 
              <th>Delete Contact</th>
              <th>Name</th>
              <th>Position</th>
              <th>Location Met</th>
              <th>Date Last Interacted</th>
              <th>Company</th>
              <th>{this.props.id}</th>
              </tr>
        {isContactsLoaded && this.state.contacts.contact.map((data, index) => {
          return(
        <tr>
          <td><button onClick = {this.deleteContact} id={data.id}>Delete</button></td>  
          <td>{(data.name)}</td>
          <td>{(data.position)}</td>
          <td>{data.location_met}</td>
          <td>{data.date_last_interacted}</td>
          <td>{data.company_tb_id}</td>
        </tr>
          )
        }
      )}
      
    </div>
    );
  }
}

export default Contact;