import React from 'react';

import Icon from './Icon';

class ContactForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      name: null,
      email: null,
      message: null
    }
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
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
  
  render () {
    return (
      <form>
        <label>Name</label>
        <input onChange={this.handleNameChange} placeholder="Name" type="text" />
        <label>Email</label>
        <input onChange={this.handleEmailChange} placeholder="Email" type="email" />
        <label>What's the problem?</label>
        <textarea onChange={this.handleMessageChange} rows="5" placeholder="What's the problem?" />
        <button type="submit">
          Submit
          <Icon fa="chevron-right ml10" />
        </button>
      </form>
    );
  }
}

export default ContactForm;