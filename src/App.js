import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import RouterWrap from './router';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <RouterWrap/>
        </div>
    );
  }
}

export default App;
