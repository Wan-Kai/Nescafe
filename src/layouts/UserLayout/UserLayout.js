import mlogo from '../../assets/img/mlogo.png'
import React from 'react';
import 'antd/dist/antd.css';
import './UserLayout.less';
import {Layout, Menu, Icon, Dropdown} from 'antd';
import {Avatar} from 'antd';
import Badge from "antd/es/badge";

const { Header, Sider, Content,Footer } = Layout;

const menuLanguage = (
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

const menuUser = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                未读消息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                个人信息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                设置
            </a>
        </Menu.Item>

    </Menu>
);

export default class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Header style={{ background: '#FFFFFF', padding: 0}} className="header">
                    <img  className="logo" src={mlogo}/>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    <div className="global">
                        <Dropdown overlay={menuUser}>
                        <span style={{ marginRight: 24 }}>
                                  <Badge count={1}>
                                     <Avatar  icon="user" />
                                  </Badge>
                        </span>
                        </Dropdown>
                        <Dropdown overlay={menuLanguage}>
                            <a  href="#" >
                                语言 <Icon type="global" />
                            </a>
                        </Dropdown>
                    </div>
                </Header>

                <div className="mainPart">
                    <Layout>
                        <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>

                            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span>nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <span>nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <span>nav 3</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            {children}
                            <Footer className="footer">Copyright by Wan</Footer>
                        </Content>
                    </Layout>
                </div>

            </Layout>

        );
    }
}
//
// ReactDOM.render(<SiderDemo />, document.getElementById('container'));
