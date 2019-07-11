import React, {Component, component} from 'react';
import {Layout, Menu, Icon, SubMenu, Dropdown, Avatar} from 'antd';
import './UserCenterLayout.less';
import mlogo from "../../assets/img/mlogo.png";
import Badge from "antd/es/badge";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import ExceptionsPage from '../../pages/ExceptionPages/Exceptions'
import {loginActions} from "../../actions/loginAction";
import Spin from "antd/es/spin";

const {Header,Footer,Content} = Layout;

const MenuUser = (
    <Menu>
        <Menu.Item>
            <a target="/user" rel="noopener noreferrer">
                个人中心
            </a>
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

const StillNotLogin = (
    <Menu>
        <Menu.Item>
            <a href="#login" rel="noopener noreferrer">
                login now!
            </a>
        </Menu.Item>
    </Menu>
)

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

class userCenterLayout extends Component {

    render() {
        const {children,loggedIn,initLogin,loggingIn} = this.props;
        return (
            <Spin spinning={loggingIn}>
                {console.log(localStorage.getItem("token"))}
                <Layout>
                <Header style={{background: '#FFF', height: 60}} className="user-header">
                    <Menu
                        theme="light"
                        mode="horizontal"
                        className="user-menu"
                        defaultSelectedKeys={['1']}

                        style={{lineHeight: '60px', height: 60}}>

                        <Menu.Item key="1">企业本页</Menu.Item>
                        <Menu.Item key="2">新闻中心</Menu.Item>
                        <Menu.Item key="3">资信排行</Menu.Item>
                        <Menu.Item key="4">行情中心</Menu.Item>

                        <img className="user-logo" src={mlogo}/>
                        <div className='menu-float-right'>
                            <Dropdown overlay={loggedIn ? MenuUser : StillNotLogin}>
                                <span style={{marginRight: '1em'}}>
                                    <Badge count={1}>
                                        <Avatar icon="user"/>
                                    </Badge>
                                </span>
                            </Dropdown>

                            <Dropdown overlay={menu}>
                                <a href="#">
                                    语言 <Icon type="global"/>
                                </a>
                            </Dropdown>
                        </div>
                    </Menu>
                </Header>
                <Content>
                    {!initLogin?null:loggedIn?children:<ExceptionsPage status="403"/>}
                </Content>
                <Footer style={{background: '#FFF'}} className="user-footer">Copyright by Wan</Footer>
            </Layout>
            </Spin>
        )
    }
}

function mapSateToProps(state) {
    const {loggedIn,initLogin,loggingIn} = state.authentication
    return {loggedIn,initLogin,loggingIn}

}

const UserCenterLayout = connect(mapSateToProps)(userCenterLayout)

export default UserCenterLayout;
