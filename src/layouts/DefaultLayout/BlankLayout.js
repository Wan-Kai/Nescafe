import React, {Component, component} from 'react';
import Icon from "antd/es/icon";
import {Layout} from 'antd'

const {Header, Content, Footer} = Layout

const Ghead = (
    <Header className='blank-header'>
        <Icon type="global" />
    </Header>
)

const Gfoot = (

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
        const {children} = this.props;
        return (
            <main>
                <div>
                    <Ghead/>
                    <Content>{children}</Content>
                    <Gfoot/>
                </div>
            </main>
        )
    }
}

export default BlankLayout;
