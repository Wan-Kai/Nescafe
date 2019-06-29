import React, {Component, component} from 'react';
import Icon from "antd/es/icon";
import {Layout} from 'antd'

const {Header, Content, Footer} = Layout

const header = (
    <Header className='blank-header'>
        <Icon type="global" />
    </Header>
)

const footer = (

    <Footer className='blank-footer'>
        <div>
        <img alt='logo' src='../../assests/mlogo.svg'/>
        </div>
        <div className='blank-footer-copyright'>
            你比五环多一环     花旗杯创新项目
        </div>
    </Footer>
)


class BlankLayout extends Component{
    render() {
        const { children } = this.props;
        return(
        <div>
            <header/>
            <Content>{children}</Content>
            <footer/>
        </div>
        )
    }
}

export default BlankLayout;
