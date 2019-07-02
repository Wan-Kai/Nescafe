import React, {Component, component} from 'react';
import Icon from "antd/es/icon";
import './LoginLayout.less'
import myLogo from '../../assets/img/mlogo.png'
import {Menu} from "antd";
import Dropdown from "antd/es/dropdown";

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
)


class LoginLayout extends Component {
    // todo 父子通信，传text
    render() {
        const {children} = this.props;
        return (
            <div className='root'>
                <div className="container">
                    <div className='flexColumn'>
                        <div className='head-menu'>
                            <Dropdown overlay={menu}>
                                <Icon type="global" className='icon'/>
                            </Dropdown>
                        </div>
                        <div className='content'>
                                {children}
                        </div>
                        <div className='footer-logo'>
                            <div style={{display:"block",height:"80%"}}/>
                            <p className='footer-p'>
                                <img alt='logo' className='pic' src={myLogo}
                                     style={{width: "20px", height: "20px"}}/>
                                花旗杯创新项目
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default LoginLayout;
