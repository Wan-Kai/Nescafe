import React, {Component} from 'react';
import Icon from "antd/es/icon";
import './LoginPage.less'
import myLogo from '../../assets/img/mlogo.png'
import {Menu} from "antd";
import Dropdown from "antd/es/dropdown";
import RegisterForm from "./RegisterForm";
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
        }
    }

    handleChangeForm(msg){
        this.setState({
            isRegister:msg,
        })
    }

    // todo 父子通信，传text
    render() {
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
                            {this.state.isRegister?<RegisterForm handleLogin={this.handleChangeForm.bind(this)}/>:
                            <LoginForm handleRegister={this.handleChangeForm.bind(this)}/>}
                        {/*todo*/}
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

export default LoginPage;
