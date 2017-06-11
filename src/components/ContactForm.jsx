import React from 'react';
import Axios from 'axios';

import Icon from './Icon';
import Submit from './Submit';

class ContactForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.endpoint = 'http://groundupmusic.net/api/support';
    
    this.tests = {
      name: /^[a-zA-Z ]{1,70}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    };
    
    this.state = {
      loading: false,
      result: null,
      name: null,
      email: null,
      message: null
    }
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange (e) {
    let name = e.target.value;
    this.setState({ name });
  }
  
  handleEmailChange (e) {
    let email = e.target.value;
    this.setState({ email });
  }
  
  handleMessageChange (e) {
    let message = e.target.value;
    this.setState({ message });
  }
  
  canSubmit () {
    let { name, email, message } = this.state;
    if (!name || !name.length || !name.match(this.tests.name)) return false;
    if (!email || !email.length || !email.match(this.tests.email)) return false;
    if (!message || !message.length) return false;
    return true;
  }
   
  handleSubmit (e) {
    e.preventDefault();
    this.setState({ loading: true });
    Axios.post(this.endpoint, this.state)
      .then(res => {
        this.setState({ result: 'Your message has been received. We will get back to you as soon as possible!', loading: false });
      })
      .catch(err => {
        this.setState({ result: 'There was an error submitting your request! Please try again later, or submit a different request than previous.', loading: false });
        console.log(err);
      });
  }
  
  render () {
    let { result, loading } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {!result && !loading ? <fieldset>
          <label>Name</label>
          <input onChange={this.handleNameChange} placeholder="Name" type="text" />
          <label>Email</label>
          <input onChange={this.handleEmailChange} placeholder="Email" type="email" />
          <label>What's the problem?</label>
          <textarea onChange={this.handleMessageChange} rows="5" placeholder="What's the problem?" />
          <Submit when={this.canSubmit()}>
            Submit
            <Icon fa="chevron-right ml10" />
          </Submit>
        </fieldset> : result ? <p className="result">{result}</p> : <p className="result">Loading. . .</p>}
      </form>
    );
  }
}

export default ContactForm;