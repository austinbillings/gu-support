import React from 'react';

import Slide from '../components/Slide';
import WelcomeView from './WelcomeView';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <Slide className="gold-bg black">
          <WelcomeView />
        </Slide>
      </div>
    );
  }
};

export default Root;