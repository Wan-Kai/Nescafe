import React, {Component, component} from 'react';
import {Layout, Menu, Icon, SubMenu, Dropdown, Avatar} from 'antd';
import './NewsLayout.less';
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
            <a target="/login" rel="noopener noreferrer">
                login now!
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                sign in now!
            </a>
        </Menu.Item>
    </Menu>
)

const userMenu = (isLogin) =>{
    return (isLogin?<MenuUser/>:<StillNotLogin/>);
}


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

export default class NewsLayout extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin:false,
        }
    }

    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Header style={{ background: '#FFFFFF', padding: 0}} className="header">
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '58px'}}>

                        <Menu.Item key="1">企业本页</Menu.Item>
                        <Menu.Item key="2">信息</Menu.Item>
                        <Menu.Item key="3">设置</Menu.Item>

                        <img  className="logo" src={mlogo}/>
                        <div className='menu-float-right'>
                        <span style={{marginRight:'1em'}}>
                            <Badge count={1}>
                            <Avatar  icon="user" />
                            </Badge>
                        </span>
                        <Dropdown overlay={menu}  style={{marginLeft:'20px'}}>
                            <a  href="#">
                                语言 <Icon type="global" />
                            </a>
                        </Dropdown>
                        </div>
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

