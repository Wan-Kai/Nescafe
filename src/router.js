import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import NewsLayout from './layouts/NewsLayout/NewsLayout';

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={LoginLayout} exact />
                        <Route path="/login" component={NewsLayout} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
