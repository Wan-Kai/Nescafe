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

const text = null;

class BlankLayout extends Component {
    // todo 父子通信，传text
    render() {
        const {children,headerText} = this.props;
        return (
            <layout>
                <div className="container">
                    <header>
                        <Dropdown overlay={menu}>
                            <Icon type="global" className='icon'/>
                        </Dropdown>
                    </header>
                    <div className='content'>
                        {headerText}
                        <div>
                            <div style={{display: "inline-block", width: "23%"}}></div>
                            <div style={{display: "inline-block"}}>
                                {children}
                            </div>
                            <div style={{display: "inline-block", width: "23%"}}></div>
                        </div>
                        <footer>
                            <div>
                                <img alt='logo' className='pic' src={myLogo}/><br/>
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
