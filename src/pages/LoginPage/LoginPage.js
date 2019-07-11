import React, {Component} from 'react';
import Icon from "antd/es/icon";
import './LoginPage.less'
import myLogo from '../../assets/img/mlogo.png'
import {Menu} from "antd";
import Dropdown from "antd/es/dropdown";
import QueueAnim from 'rc-queue-anim';
import LoginForm from "./LoginForm";

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                English
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">
                中文
            </a>
        </Menu.Item>
    </Menu>
)


class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isRegister:false,
        };
    }

    handleChangeForm(msg){
        this.setState({
            isRegister:msg,
        })
    }

    // todo 父子通信，传text
    render() {
        return (
            <div className='login-page-root'>
                <div className="login-page-container">
                    <div className='login-page-flexColumn'>
                        <div className='login-page-head-menu'>
                            <Dropdown overlay={menu}>
                                <Icon type="global" className='login-page-icon'/>
                            </Dropdown>
                        </div>
                        <div className='login-page-content'>
                                <LoginForm key="0" />
                        </div>
                        <QueueAnim delay={200} component="div" className='login-page-footer-logo' type="bottom">
                            <p key="0" className='login-page-footer-p'>
                                <img key="0" alt='logo' className='pic' src={myLogo}
                                     style={{width: "20px", height: "20px"}}/>
                                花旗杯创新项目
                            </p>
                        </QueueAnim>
                    </div>
                </div>

            </div>
        )
    }
}

export default LoginPage;
