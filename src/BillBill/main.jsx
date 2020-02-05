import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';
import Header from './header';
import Body from './body';
import State from './store.js';
import { Provider, inject, observer } from 'mobx-react';

const stores = {
  state: new State()
};


export default class BillBill extends React.Component {  
  componentDidMount(){
    style.use();
  }
  componentWillUnmount(){
    style.unuse();
  }
  render() {
    return (
      <Provider {...stores}>
      <React.Fragment>
        <Header />
        <Body />
      </React.Fragment>
      </Provider>
    );
  }
}
