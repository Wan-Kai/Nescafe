import React, {Component} from 'react';
import {Layout, Menu, Icon, Dropdown, Avatar} from 'antd';
import './UserCenterLayout.less';
import mlogo from "../../assets/img/mlogo.png";
import Badge from "antd/es/badge";
import {connect} from "react-redux";
import ExceptionsPage from '../../pages/ExceptionPages/Exceptions'
import Spin from "antd/es/spin";

const {Header,Footer,Content} = Layout;

const MenuUser = (
    <Menu>
        <Menu.Item>
            <a target="/user" rel="noopener noreferrer">
                个人中心
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                未读消息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="#/user/setting" >
                设置
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" >
                退出登录
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

const menu =(
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
                <Layout style={{minHeight:'-webkit-fill-available'}}>
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
                        <Menu.Item key="5"><a href="#/">返回主页</a></Menu.Item>
                        <img alt='logo' className="user-logo" src={mlogo} />
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

                <Footer style={{background: '#FFF'}} className="user-footer">
                    © 2019 PixelCube, All right reserved.
                </Footer>
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
