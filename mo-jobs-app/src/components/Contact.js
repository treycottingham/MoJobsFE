import React from 'react'
import { Button, Table } from 'semantic-ui-react'

class Contact extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      contacts: '',
      isContactsLoaded: false
    }  
}


fetchContacts = () => {
    console.log('ValueofCompanyID', this.props.match.params.value)
    const contactURL = `https://mo-jobs-database.herokuapp.com/contact/${this.props.match.params.value}`;

    // const contactURL = `http://localhost:3000/contact/${this.props.match.params.value}`
    // const contactURL = 'https://mo-jobs-database.herokuapp.com/contact';
    
    return fetch(contactURL)
      .then(response => response.json())
      .then(contacts => {
        console.log('contactsresp', contacts)
        // this.setState({contacts,
        // isContactsLoaded: true
        // })
 
        this.setState({contacts,
            isContactsLoaded: true
            })
        console.log('AFTERSTATE', this.state)
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
    
    
    }


render() {
  
  const isContactsLoaded = this.state.isContactsLoaded

    return (
      <Table basic id="contact-table">
           <Table.Header> 
              <Table.Row>
                <Table.HeaderCell>Delete Contact</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Position</Table.HeaderCell>
                <Table.HeaderCell>Location Met</Table.HeaderCell>
                <Table.HeaderCell>Date Last Interacted</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        {isContactsLoaded && this.state.contacts.contact.map((data, index) => {
          return(
        <Table.Header>
          <Table.Row>
            <Table.Cell><Button color='red' inverted onClick = {this.deleteContact} id={data.id}>Delete</Button></Table.Cell>  
            <Table.Cell>{(data.name)}</Table.Cell>
            <Table.Cell>{(data.position)}</Table.Cell>
            <Table.Cell>{data.location_met}</Table.Cell>
            <Table.Cell>{data.date_last_interacted.substring(0,10)}</Table.Cell>
          </Table.Row>
        </Table.Header>
          )
        }
      )}
      
    </Table>
    );
  }
}

export default Contact;