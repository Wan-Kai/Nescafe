import React, {Component} from 'react';
import Icon from "antd/es/icon";
import './registerPage.less'
import myLogo from '../../../assets/img/mlogo.png'
import background from '../../../assets/img/backForm.png';
import {Menu,Layout} from "antd";
import Dropdown from "antd/es/dropdown";
import NewRegister from "./newRegister"

const {Header,Footer} = Layout;
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


class RegisterPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isRegister:false,
        };
    }

    // todo 父子通信，传text
    render() {
        return (
           <div className="register-page-root" style={{minHeight:'-webkit-fill-available'}}>
               <div>
                   <Header style={{background: '#FFF', height: 60}}>
                       <Dropdown overlay={menu} className="register-page-global">
                          <Icon type="global" />
                       </Dropdown>
                   </Header>
                   <div className="register-page-width">
                       <div className="register-page-content">
                           <div className="register-page-content-form">
                               <NewRegister/>
                           </div>
                           <div className="register-page-content-background">
                               <img alt="background" src={background} className="register-page-content-background-img"/>
                           </div>
                       </div>
                   </div>

                   <Footer className="register-page-footer" style={{background: '#FFF', height: 60}}>
                       <p><img alt="background"  src={myLogo} className="register-page-logo"/>花旗杯创新组</p>
                   </Footer>
               </div>
           </div>
        )
    }
}

export default RegisterPage;
