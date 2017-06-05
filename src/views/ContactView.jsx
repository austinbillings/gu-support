import React from 'react';

import Icon from '../components/Icon';
import ContactForm from '../components/ContactForm';

class ContactView extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <view className="slide-grid blue-bg central">
        <box className="max100p">
          <h1>
            <Icon fa="send-o mr15" />
            If You’re Still Having Trouble...
          </h1>
          <p>
            If you’re still having trouble, please contact us via the form below. 
            <br />
            We’ll respond as quickly as we can.
          </p>
          <ContactForm  />
        </box>
      </view>
    )
  }
};

export default ContactView;