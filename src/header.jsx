import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import logo from './assets/img/logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div
          className='logo'
          style={{
            backgroundImage: `url(${logo})`
          }}
        />
        <div className='pageLink'>
          <Link className='worksLink' to={`/`}>
            Works
          </Link>
          <Link className='aboutLink' to={`about`}>
            About
          </Link>
        </div>
      </div>
    );
  }
}
