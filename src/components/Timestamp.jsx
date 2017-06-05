import React from 'react';
import moment from 'moment';

class Timestamp extends React.PureComponent {
  constructor (props) {
    super(props);
  }
  
  render () {
    let { format, time } = this.props;
    let displayString = moment(time).format(format);
    
    return (
      <datetime className={this.props.className}>{displayString}</datetime>
    )
  }
}

export default Timestamp;