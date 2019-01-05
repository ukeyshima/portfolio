import React from 'react';
import WorkDescription from './workDescription';
import WorkRelation from './workRelation';

export default class WorkRepletion extends React.Component {
  render() {
    return (
      <div className='workRepletion'>
        <WorkDescription description={this.props.description} />
        <WorkRelation relation={this.props.relation} />
      </div>
    );
  }
}
