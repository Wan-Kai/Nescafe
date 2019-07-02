import React, { Component } from 'react';
import LayoutRoute from './components/LayoutRoute';
import LoginUser from './layouts/LoginUser/LoginUser';
import Test from './pages/mainPage/Test';
import { BrowserRouter, HashRouter, Redirect, Switch } from 'react-router-dom';
import './App.css';


import LoginForm from './pages/form/UserForm'
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
                  component={Test}
              />
              <LayoutRoute
                  exact
                  path="/login"
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
                path="/info"
                layout={BlankLayout}
                component={StepForm}
              />
              <Redirect to="/" />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;

