import React, { Component } from 'react';
import LayoutRoute from './components/LayoutRoute';
import NewsLayout from './layouts/NewsLayout/NewsLayout';
import MainPage from './pages/NewsPage/NewsPage';
import { HashRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
import User from './layouts/UserLayout/UserLayout';
import UserPage from './pages/UserPage/UserPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserNewsPage from './pages/UserPage/UserNewsPage';
import Route from "react-router-dom/es/Route";
import PersonForm from './components/PersonalPage/personForm';

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

              <Route
                  path="/login"
                  component={LoginPage}
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
              <LayoutRoute
                  exact
                  path="/user/comNews/news"
                  layout={User}
                  component={PersonForm}
              />
              <Redirect to="/" />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;

