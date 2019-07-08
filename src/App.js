import React, { Component } from 'react';
import LayoutRoute from './components/LayoutRoute';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import HomePage from './pages/HomePage/HomePage';
import { HashRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
import User from './layouts/UserLayout/UserLayout';
import UserPage from './pages/UserPage/UserPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Explore from './pages/HomePage/Explore';
import UserNewsPage from './pages/UserPage/UserNewsPage';
import Route from "react-router-dom/es/Route";
import PersonForm from './components/PersonalPage/personForm';
import NewsCenter from './pages/NewsCenter/NewsCenter';
import FinanceForm from './components/PersonalPage/FinanceForm/FinanceForm'
import InvestForm from './components/PersonalPage/InvestForm/InvestForm'


class App extends Component {

  render() {
    return (
        <HashRouter>
          <Switch>
              <LayoutRoute
                  exact
                  path="/"
                  layout={HomeLayout}
                  component={HomePage}
              />
              <LayoutRoute
                  exact
                  path="/explore"
                  layout={HomeLayout}
                  component={Explore}
              />
              <Route
                  path="/login"
                  component={LoginPage}
              />

              <LayoutRoute
                  exact
                  path="/user"
                  layout={User}
                  component={UserPage}
              />
              <LayoutRoute
                  exact
                  path="/user/company/center"
                  layout={User}
                  component={PersonForm}
              />
              <LayoutRoute
                  exact
                  path="/user/company/news"
                  layout={User}
                  component={NewsCenter}
              />
              <LayoutRoute
                  exact
                  path="/user/finance"
                  layout={User}
                  component={FinanceForm}
              />
              <LayoutRoute
              exact
              path="/user/invest"
              layout={User}
              component={InvestForm}
              />

              <Redirect to="/" />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;

