import mlogo from '../../assets/img/mlogo.png'
import React from 'react';
import 'antd/dist/antd.css';
import './UserLayout.less';
import {Layout, Menu, Icon,Dropdown} from 'antd';
import {Avatar} from 'antd';
import Badge from "antd/es/badge";

const { Header, Sider, Content,Footer} = Layout;
const {SubMenu} = Menu;

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
    rootSubmenuKeys = ['comNews', 'sub2', 'sub4'];

    state = {
        collapsed: false,
        openKeys: ['comNews'],
    };


    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if(this.rootSubmenuKeys.indexOf(latestOpenKey) === -1){
            this.setState({ openKeys });
        }else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            openKeys : []
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

                            <Menu theme="light" mode="inline"
                                  defaultSelectedKeys={['1']}
                                  openKeys={this.state.openKeys}
                                  onOpenChange={this.onOpenChange}
                            >
                                <SubMenu
                                    key="comNews"
                                    title={
                                        <span>
                                           <Icon type="mail" />
                                           <span>企业</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="news">
                                        <a href="#/user/company/news">
                                            新闻中心
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="stract">
                                        <a href="#/user/company/center">
                                            今日安排
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="inquire">信用查询</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span>人事管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="7">Option 7</Menu.Item>
                                        <Menu.Item key="8">Option 8</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                                            <Icon type="setting" />
                                            <span>Navigation Three</span>
                                        </span>

                                    }
                                >
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
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
