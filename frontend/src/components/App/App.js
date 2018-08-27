import React, { Component } from 'react';
import { getInitData } from '../App/../../api/bootstrap';
import './App.css';

class App extends Component {

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

export default App;
