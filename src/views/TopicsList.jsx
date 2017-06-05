import React from 'react';

import Topics from '../Topics';
import TopicView from './TopicView';

class TopicsList extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let elements = Topics.map((topic, idx) => {
      return <TopicView key={topic.id} index={idx} topic={topic} />
    });
    
    return <div>{elements}</div>;
  }
}

export default TopicsList;