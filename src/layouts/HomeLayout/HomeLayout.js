import React from 'react';
import {Layout,Icon,Button} from "antd";
import Logo from '../../assets/img/mlogo.png'
import './HomeLayout.less'

const {Header,Footer,Content} = Layout;

class HomeLayout extends React.Component{
    render(){
        const { children } = this.props;
        return (
            <Layout>
                <Header style={{ background: '#96cfc9', padding: 0}}>
                    <div className="headerInLeft">
                        <h2 style={{color:'#e9e9e9'}}><img src={Logo} className="logo"/>Pixel Cube</h2>
                    </div>
                    <div className="headerInRight">
                        <Button type="primary" shape="round" size="middle" style={{backgroundColor:'#ff6c37',border:'transparent'}}>
                            <b>SIGN IN</b>
                        </Button>
                    </div>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer style={{background:'#96cfc9'}}>
                    <div className="footer" >
                        <p>Copyright by Wan</p>
                    </div>
                </Footer>
            </Layout>
        );
    }

}

export default HomeLayout;
