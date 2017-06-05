import React from 'react';
import Scrollchor from 'react-scrollchor';

import Topics from '../Topics';

class TopicsMenu extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let elements = Topics.map(topic => (
      <li key={topic.id}>
        <Scrollchor to={topic.id}>{topic.name}</Scrollchor>
      </li>
    ));
    
    return <ol className="topics-menu">{elements}</ol>;
  }
};

export default TopicsMenu;