import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header } from 'semantic-ui-react';

class LandingPage extends Component {
  render() {
    return (
      <content>
        <Header as='h3'>Who are We?</Header>
        <p>We are 4 Geeks new to the Tech industry, who realized very quickly that keeping track of all your Resumes,
        cover letters, interviews, e-mails, contacts, etc could be a real pain.  With the average Coding school grad applying to 50+ jobs, it seemed
        the need for a comprehensive service to keep track of where you stand with each job was more important than ever.  Enter Mo Jobs, Less Probs!</p>
        <Header as='h3'>How are we different?</Header>
        <p>We're designed by 4 guys who have gone through the job hunt, and we know what information is important, and what is filler.  Our goal was to provide an 
        easy to understand interface, a simple way to update and delete jobs, and an easy way to reference all your current data.</p>
        <Header as='h3'>Completely Free</Header>
        <p>Tired of getting roped in by Apps that promise to help, but then lock out features until you get the "premium package"?  So are we.  Mo Jobs, Less Probs is 100% Free,
        and we'll never ask you for money.  We've been in your shoes, and we want to help you land your dream job.  So what are you waiting for?  Let's get started!</p>
        <button>
          <Link style={{display: 'block', height: '100%', textDecorationLine: "none", textDecorationColor: '#000000'}} to="/company">Check Out Yo Dashboard</Link>
        </button>
      </content>
    )
  }
}

export default LandingPage