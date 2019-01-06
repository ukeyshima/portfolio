import React from 'react';

export default class WorkRelation extends React.Component {
  render() {
    return (
      <div className='workRelation'>
        {this.props.relation.map((e, i) => {
          return e.hasOwnProperty('qiita') ? (
            <a key={i} className='qiita' target='_blank' href={e.qiita}>
              Q
            </a>
          ) : e.hasOwnProperty('shadertoy') ? (
            <a key={i} className='shadertoy' target='_blank' href={e.shadertoy}>
              S
            </a>
          ) : e.hasOwnProperty('github') ? (
            <a key={i} className='github' target='_blank' href={e.github}>
              G
            </a>
          ) : (
            <a key={i} className='demo' target='_blank' href={e.demo}>
              D
            </a>
          );
        })}
      </div>
    );
  }
}
