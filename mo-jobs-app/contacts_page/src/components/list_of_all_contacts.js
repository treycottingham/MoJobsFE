import React from 'react'

class Profile extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isContactsLoaded: false
    }  
}

fetchContacts = () => {
    const contactURL = 'https://mo-jobs-database.herokuapp.com/contact';
    return fetch(contactURL)
      .then(response => response.json())
      .then(contacts => {
        this.setState({contacts:contacts,
        isContactsLoaded: true
        })
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
        console.log('didthisdelete?', contact) 
      
        this.setState({contact})
      
      })
        .catch(function(error) {
        console.log('error')
      })  
}

componentDidMount() {
    this.fetchContacts()
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

export default Profile