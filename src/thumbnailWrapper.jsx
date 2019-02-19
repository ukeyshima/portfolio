import React from 'react';
import Thumbnail from './thumbnail';
import WorkRepletion from './workRepletion';

export default class ThumbnailWrapper extends React.Component {
  render() {
    return (
      <div className='thumbnailWrapper'>
        <div className='thumbnailName'>{this.props.name}</div>
        <Thumbnail name={this.props.name} />
        <WorkRepletion
          description={this.props.description}
          relation={this.props.relation}
        />
      </div>
    );
  }
}
