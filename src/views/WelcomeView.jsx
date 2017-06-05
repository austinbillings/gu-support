import React from 'react';

import Icon from '../components/Icon';
import TopicsMenu from './TopicsMenu';

class WelcomeView extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let { topics } = this.props;
    return (
      <view className="slide-grid central gold-lava black">
        
        <box>
          <img src="ui/img/logo-trans.svg" className="logo" />
        </box>
        
        <box className="welcome">
          <h1>
            <Icon fa="medkit mr15" />
            GroundUP Music <span className="w100">Support</span>
          </h1>
          
          <p>
            <span>Thank you for supporting <b>GroundUP</b> artists! </span>
            <span>If you’re having trouble accessing your digital GroundUP audio or video, we’re here to help! </span>
          </p>
          
          <p>
            <Icon fa="hand-o-down mr10" />
            <b>Click on a topic below.</b>
          </p>
          
          <TopicsMenu />
        </box>
      </view>
    );
  }
}

export default WelcomeView;