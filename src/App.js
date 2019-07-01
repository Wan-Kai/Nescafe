import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import LayoutRoute from './components/LayoutRoute';
import LoginUser from './layouts/LoginUser/LoginUser';
import Test from './pages/Test';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';


import LoginForm,{headerText} from './pages/form/LoginForm'
import registerForm ,{RHeaderText}from './pages/form/RegisterForm'
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
                  headerText={headerText()}
              />
              <LayoutRoute
                  exact
                  path="/register"
                  layout={BlankLayout}
                  headerText={RHeaderText()}
                  component={registerForm}
              />
              <LayoutRoute
                  exact
                  path="/main"
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

