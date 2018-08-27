import React, { Component } from 'react';
import { getInitData } from '../../../api/bootstrap';

import './home.css';

export class Home extends Component {

  componentDidMount() {
    getInitData().then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}