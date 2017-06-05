import React from 'react';

class TopicView extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let { index } = this.props;
    let { id, name, content } = this.props.topic;
    let classList = this.props.className + ' slide-grid topic-slide';
    
    return (
      <view id={id} className={classList}>
        <grid>
          <box className="box-xs-12 box-lg-10 offset-lg-1">
            <h1>
              <span className="o2">#{++index}. </span>
              {name}
            </h1>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </box>
        </grid>
      </view>
    );
  }
}

export default TopicView;