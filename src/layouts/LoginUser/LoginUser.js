import React, {Component, component} from 'react';
import {Layout,Menu,Icon,SubMenu} from 'antd';
import './LoginUser.less';

const {Header,Footer,Content,Sider} = Layout;

export default class LoginUser extends Component{

    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Header>
                    <div  />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">企业本页</Menu.Item>
                        <Menu.Item key="2">信息</Menu.Item>
                        <Menu.Item key="3">设置</Menu.Item>

                        <Icon type="global" className="global"></Icon>
                    </Menu>
                </Header>
                     <Content>
                        {children}
                     </Content>
                <Footer className="footer">Copyright by Wan</Footer>
            </Layout>

        )
    }
}

