import React from 'react';

import Topics from '../Topics';
import Slide from '../components/Slide';
import WelcomeView from './WelcomeView';
import TopicsList from './TopicsList';
import ContactView from './ContactView';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <WelcomeView topics={Topics} />
        <TopicsList />
        <ContactView />
      </div>
    );
  }
};

export default Root;