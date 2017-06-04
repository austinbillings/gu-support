import React from 'react';

class Slide extends React.Component {
  constructor (props) {
    super(props);
    this.style = {
      width: '100vw',
      minHeight: '100vh',
      display: 'block'
    };
  }
  
  render () {
    let { className, children } = this.props;
    return (
      <div className={className} style={this.style}>
        {children}
      </div>
    );
  }
};

export default Slide;