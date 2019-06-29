import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import LayoutRoute from './components/LayoutRoute';
import LoginUser from './layouts/LoginUser/LoginUser';
import Test from './pages/Test';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
              <LayoutRoute
                  exact
                  path="/"
                  layout={LoginUser}
                  component={Test}
              />
              <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
