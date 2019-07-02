import React, { Component } from 'react';
import LayoutRoute from './components/LayoutRoute';
import NewsLayout from './layouts/NewsLayout/NewsLayout';

import MainPage from './pages/NewsPage/NewsPage';
import { HashRouter, Redirect, Switch } from 'react-router-dom';

import './App.css';
import User from './layouts/UserLayout/UserLayout';
import UserPage from './pages/UserPage/UserPage';

import UserForm from './pages/LoginPage/LoginPage'

import registerForm from './pages/LoginPage/RegisterForm'
import LoginLayout from "./layouts/LoginLayout/LoginLayout";
import StepForm from "./pages/StepForm/stepForm";

class App extends Component {

  render() {
    return (
        <HashRouter>
          <Switch>
              <LayoutRoute
                  exact
                  path="/"
                  layout={NewsLayout}
                  component={MainPage}
              />

              <LayoutRoute
                  exact
                  path="/login"
                  layout={LoginLayout}
                  component={UserForm}
              />
              <LayoutRoute
                  exact
                  path="/main"
                  layout={NewsLayout}
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

