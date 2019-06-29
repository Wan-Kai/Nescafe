import React, {Component, component} from 'react';
import Icon from "antd/es/icon";
import './login.less'
import myLogo from '../../assests/mlogo.svg'
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

class BlankLayout extends Component{

    render() {
        const {children} = this.props;
        return (
            <layout>
                <div className="container">
                    <header>
                        <Dropdown overlay={menu}>
                            <Icon type="global" className='icon'/>
                        </Dropdown>
                    </header>
                    <div className='content'>
                        <div className='slogan'>
                            欢迎来到登陆页面
                        </div>
                        <div>
                            <div style={{display: "inline-block", width: "23%"}}></div>
                            <div style={{display: "inline-block"}}>
                                {children}
                            </div>
                            <div style={{display: "inline-block", width: "23%"}}></div>
                        </div>
                        <footer>
                            <div>
                                你比五环多一环
                                <img alt='logo' className='pic' src={myLogo}/>
                                花旗杯创新项目
                            </div>
                        </footer>
                    </div>
                </div>
            </layout>
        )
    }
}

    export default BlankLayout;
