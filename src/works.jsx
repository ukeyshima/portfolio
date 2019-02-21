import React from 'react';
import { inject, observer } from 'mobx-react';
import json from './assets/main.json';
import ThumbnailWrapper from './thumbnailWrapper';
import Header from './header';
import style from './style.scss';
import Loading from './assets/img/thumbnails/loading.png';

const thumbnails = [];
json.forEach(e => {
  thumbnails.push(import(`./assets/img/thumbnails/${e.name}.png`));
});

@inject(({ state }) => ({
  thumbnails: state.thumbnails,
  updateThumbnail: state.updateThumbnail
}))
@observer
export default class Works extends React.Component {
  async componentDidMount() {
    style.use();
    Promise.all(thumbnails).then(e => {
      e.forEach((f, i) => {        
        this.props.updateThumbnail(i, f.default);
      });
    });
  }
  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='works'>
          {this.props.thumbnails.map((e, i) => {
            return (
              <ThumbnailWrapper
                key={i}
                name={json[i].name}
                description={json[i].description}
                relation={json[i].relation}
                thumbnail={e || Loading}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
