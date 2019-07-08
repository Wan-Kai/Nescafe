import React, {Component, component} from 'react';
import {Layout, Menu, Icon, SubMenu, Dropdown, Avatar} from 'antd';
import './UserCenterLayout.less';
import mlogo from "../../assets/img/mlogo.png";
import Badge from "antd/es/badge";

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

class UserCenterLayout extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin:false,
        }
    }

    render() {
        const isLogin = this.state.isLogin;
        const {children} = this.props;
        return (
            <Layout>
                <Header style={{background: '#FFF',height:60}} className="user-header">
                    <Menu
                        theme="light"
                        mode="horizontal"
                        className="user-menu"
                        defaultSelectedKeys={['1']}

                        style={{lineHeight: '60px',height:60}}>

                        <Menu.Item key="1">企业本页</Menu.Item>
                        <Menu.Item key="2">信息</Menu.Item>
                        <Menu.Item key="3">设置</Menu.Item>

                        <img className="user-logo" src={mlogo}/>
                        <div className='menu-float-right'>
                            <Dropdown overlay={isLogin?MenuUser:StillNotLogin}>
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
                    {children}
                </Content>
                <Footer style={{background:'#FFF'}} className="user-footer">Copyright by Wan</Footer>
            </Layout>

        )
    }
}

function mapSateToProps(state) {
    const {loggedIn} = state.authentication

}


export default UserCenterLayout;
