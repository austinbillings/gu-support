import React from 'react';

class Overlay extends React.Component {
  constructor (props) {
    super(props);
    let { image, overlay, position } = this.props;
    this.wrapStyle = {
      backgroundImage: `url(${image})`,
      backgroundPosition: position || 'center center',
      backgroundSize: 'cover'
    };
    this.innerStyle = overlay ? {
      backgroundColor: overlay
    } : {};
  }
  
  render () {
    return (
      <div onClick={this.props.onClick} className={this.props.className} id={this.props.id} style={this.wrapStyle}>
        <div style={this.innerStyle} className={this.props.innerClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Overlay;