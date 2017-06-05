import React from 'react';
import Scrollchor from 'react-scrollchor';

import Icon from './Icon';

class ScrollMenu extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let style = { display: 'contents' };
    let list = this.props.pages.map(page => !page.hidden && (
      <Scrollchor key={page.hash} to={page.hash} key={page.icon}>
        <Icon fa={page.icon} /> 
        {page.name}
      </Scrollchor>
    ));
    
    return <div style={style}>{list}</div>;
  }
};

export default ScrollMenu;