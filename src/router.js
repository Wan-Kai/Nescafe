import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import BlankLayout from './layouts/DefaultLayout/BlankLayout';
import LoginUser from './layouts/LoginUser/LoginUser';

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={BlankLayout} exact />
                        <Route path="/login" component={LoginUser} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
