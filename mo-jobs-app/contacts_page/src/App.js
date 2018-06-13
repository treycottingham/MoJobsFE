import React, { Component } from 'react';

import './App.css';

import Header from './components/Header_contacts_page'
import Profile from './components/list_of_all_contacts'
import Form from './components/add_new_contact'
import Footer from './components/Footer_contacts_page'


class App extends Component {

  constructor(props) {
  super(props)
  this.state= { contacts:[] }
}

  render() {
    
    return (
      <div className="App">
        <Header />

        <Profile updateContact = {this.updateContact}/>}
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App