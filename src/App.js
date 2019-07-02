import React, { Component } from 'react';
import LayoutRoute from './components/LayoutRoute';
import LoginUser from './layouts/LoginUser/LoginUser';
import Test from './pages/mainPage/Test';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';
import User from './layouts/UserLayout/UserLayout';
import Hello from './pages/mainPage/hello';

import LoginForm from './pages/form/LoginForm'
import registerForm from './pages/form/RegisterForm'
import BlankLayout from "./layouts/DefaultLayout/BlankLayout";
import StepForm from "./pages/stepForm/StepForm";

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
              <LayoutRoute
                  exact
                  path="/register"
                  layout={BlankLayout}
                  component={registerForm}
              />
              <LayoutRoute
                  exact
                  path="/main"
                  layout={LoginUser}
                  component={Test}
              />
              <LayoutRoute
                  exact
                  path="/user"
                  layout={User}
                  component={Hello}
              />
              <Redirect to="/" />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

