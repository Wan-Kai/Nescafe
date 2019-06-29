import React, {Component, component} from 'react';
import {Layout} from 'antd';

const {Header,Footer,Content,Sider} = Layout;
export default class LoginUser extends Component{

    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Header>This a new Test</Header>
                  <Layout>
                <Sider>Sider</Sider>
                <Content>
                    {children}
                </Content>
                      </Layout>
                <Footer>Copyright by Wan</Footer>
            </Layout>

        )
    }
}

