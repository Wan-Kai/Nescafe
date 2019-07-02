import React, {Component, component} from 'react';
import {Layout,Menu,Icon,SubMenu,Dropdown} from 'antd';
import './LoginUser.less';
import mlogo from "../../assets/img/mlogo.png";

const {Header,Footer,Content} = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                中文
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                English
            </a>
        </Menu.Item>

    </Menu>
);

export default class LoginUser extends Component{

    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Header style={{ background: '#FFFFFF', padding: 0}} className="header">


                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '60px'}}
                    >

                        <Menu.Item key="1">企业本页</Menu.Item>
                        <Menu.Item key="2">信息</Menu.Item>
                        <Menu.Item key="3">设置</Menu.Item>

                        <img  className="logo" src={mlogo}/>
                        <Dropdown overlay={menu}>
                            <a className="global" href="#">
                                语言 <Icon type="global" />
                            </a>
                        </Dropdown>
                    </Menu>
                </Header>
                <div >
                    <layout>
                        <Content>
                            {children}
                            <Footer className="footer">Copyright by Wan</Footer>
                        </Content>
                    </layout>
                </div>

            </Layout>

        )
    }
}

