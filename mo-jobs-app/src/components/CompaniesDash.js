import React, { Component } from 'react';
import Form from './Form';
import Graph from './Graph'
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";

class CompaniesDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: [],
      isCompanyLoaded:false
    }  
}

fetchCompany = () => {

  const apiURL = 'https://mo-jobs-database.herokuapp.com/company';

  return fetch(apiURL)
    .then(response => response.json())
    .then(company => {
      this.setState({company,
      isCompanyLoaded:true})
      console.log('insidefetch',this.state.company)
    }
  )
    .catch((err) => console.log('err', err))
}

deleteCompany = (e) => {
  console.log('etargetid', e.target.id)

  const url = `https://mo-jobs-database.herokuapp.com/company/${e.target.id}`

  fetch(url, {
     method: 'delete',
   })
   .then(resp => resp.json())
   .then(company => {
     console.log('didthisdelet?', company) 
  
     this.setState({company})

   })
   .catch(function(error) {
     console.log('error')
   })
  }

  setCompany = (company) => {
    console.log('setCompany', company)
    this.setState({company})
  }
  
  componentDidMount() {
    this.fetchCompany()
    
  }
  

  render() {

    const isCompanyLoaded = this.state.isCompanyLoaded

    return (
   <div className="col-8 dashboard"> 
    {isCompanyLoaded && <Graph data={this.state.company} />}
      <Table basic>
        <Table.Header>
              <Table.Cell>Delete Company</Table.Cell>
              <Table.Cell>Company</Table.Cell>  
              <Table.Cell>Resume</Table.Cell>
              <Table.Cell>Cover Letter</Table.Cell>
              <Table.Cell>Date Applied</Table.Cell>
              <Table.Cell>Date of Interview</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>Technologies</Table.Cell>
              <Table.Cell>Contacts</Table.Cell>
        </Table.Header>
        {isCompanyLoaded && this.state.company.company.map((data, index) => {
          return(
          <Table.Body>
            <Table.Row>
              <Table.Cell><Button color='red' inverted onClick = {this.deleteCompany} id={data.id}>Delete Company</Button></Table.Cell>
              <Table.Cell>{data.company}</Table.Cell>  
              <Table.Cell>{(data.resume ? "✓" : "X")}</Table.Cell>
              <Table.Cell>{(data.cover ? "✓" : "X")}</Table.Cell>
              <Table.Cell>{data.date_applied.substring(0,10)}</Table.Cell>
              <Table.Cell>{data.interview_date.substring(0,10)}</Table.Cell>
              <Table.Cell>{data.description}</Table.Cell>
              <Table.Cell>{data.technologies}</Table.Cell>
              {/* <Link to="/contact" id={data.id}>Check Out Yo Dashboard</Link> */}
              <Button color='blue' inverted id='contact-button'>
                <Link to={`/contact/${data.id}`}>View Contacts</Link>
              </Button>
          {/* <Link to={`/ideas/${ this.props.testValue }`}>Create Idea</Link> */}
          </Table.Row>
        </Table.Body>
          )
        }
      )}
      </Table>
      <Form setCompany={this.setCompany}/>
    </div>

    )
  }
}

export default CompaniesDash;