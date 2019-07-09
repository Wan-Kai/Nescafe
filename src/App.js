import React, { Component } from 'react';
import LayoutRoute from './components/LayoutRoute';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import HomePage from './pages/HomePage/HomePage';
import { HashRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
import User from './layouts/UserCenterLayout/UserCenterLayout';
import UserPage from './pages/UserPage/UserPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Explore from './pages/HomePage/Explore';
import Route from "react-router-dom/es/Route";
import ExploreLayout from './layouts/HomeLayout/ExploreLayout';
import FinanceForm from './components/PersonalPage/FinanceForm/FinanceForm'
import InvestForm from './components/PersonalPage/InvestForm/InvestForm'
import mapStateToProps from "react-redux/es/connect/mapStateToProps";


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
                  layout={ExploreLayout}
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

