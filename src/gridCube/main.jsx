import React from 'react';
import CreateCanvas from './createCanvas';
import style from './style.scss';
import { Provider, inject, observer } from 'mobx-react';
import State from './store';

const stores = {
  state: new State()
};

export default class GridCube extends React.Component {
  componentDidMount() {
    style.use();
  }
  componentWillUnmount() {
    style.unuse();
  }
  render() {
    return (
      <Provider {...stores}>
        <React.Fragment>
          <CreateCanvas />
        </React.Fragment>
      </Provider>
    );
  }
}
