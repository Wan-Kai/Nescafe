import React, { Component } from 'react';
import LayoutRoute from './components/LayoutRoute';
import LoginUser from './layouts/LoginUser/LoginUser';

import MainPage from './pages/mainPage/MainPage';
import { HashRouter, Redirect, Switch } from 'react-router-dom';

import './App.css';
import User from './layouts/UserLayout/UserLayout';
import UserPage from './pages/userPage/UserPage';

import UserForm from './pages/form/UserForm'

import registerForm from './pages/form/RegisterForm'
import BlankLayout from "./layouts/DefaultLayout/BlankLayout";
import StepForm from "./pages/stepForm/StepForm";

class App extends Component {

  render() {
    return (
        <HashRouter>
          <Switch>
              <LayoutRoute
                  exact
                  path="/"
                  layout={LoginUser}
                  component={MainPage}
              />

              <LayoutRoute
                  exact
                  path="/login"
                  layout={BlankLayout}
                  component={UserForm}
              />
              <LayoutRoute
                  exact
                  path="/main"
                  layout={LoginUser}
                  component={MainPage}
              />
              <LayoutRoute
                  exact
                  path="/user"
                  layout={User}
                  component={UserPage}
              />
              <Redirect to="/" />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;

