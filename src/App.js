import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import LayoutRoute from './components/LayoutRoute';
import LoginUser from './layouts/LoginUser/LoginUser';
import Test from './pages/Test';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/form/LoginForm'
import BlankLayout from "./layouts/DefaultLayout/BlankLayout";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
              <LayoutRoute
                  exact
                  path="/"
                  layout={BlankLayout}
                  component={LoginForm}
              />
              <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    );
  }
}

