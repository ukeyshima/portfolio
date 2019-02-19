import React from 'react';
import json from './assets/main.json';
import ThumbnailWrapper from './thumbnailWrapper';
import Header from './header';
import style from './style.scss';

export default class Works extends React.Component { 
  async componentDidMount() {
    style.use();    
  }
  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='works'>
          {json.map((e, i) => {
            return (
              <ThumbnailWrapper
                key={i}
                name={e.name}
                description={json[i].description}
                relation={json[i].relation}                
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
