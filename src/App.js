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
import NewsCenter from './pages/NewsCenter/NewsCenter';
import FinanceForm from './components/PersonalPage/FinanceForm/FinanceForm'
import InvestForm from './components/PersonalPage/InvestForm/InvestForm'
import {connect} from "react-redux";
import {userActions} from "./actions/userAction";

class app extends Component {


    componentWillMount(): void {
        //todo  会不会很占资源？？
        const{loggedIn} = this.props
        if(!loggedIn){
            let token = localStorage.getItem("token")
            console.log("in if",token)
            if(token){
                console.log("in token if ")
                userActions.checkLogin(token)
                console.log("in after action ")

            }
        }
    }


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
                path="/user"
                layout={User}
                component={UserPage}
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

function mapStateToProps(state){
    const {loggedIn} = state.authentication
    return {loggedIn}
}

const App = connect(mapStateToProps)(app)

export default App;

