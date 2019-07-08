import React from 'react';
import {Layout,Icon,Button,Menu} from "antd";
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
                        <h2 style={{color:'#FFF',width: 180}}><img src={Logo} className="logo"/>Pixel Cube</h2>
                        <Menu mode="horizontal" style={{float:'left',background:'transparent',marginLeft:100,lineHeight:2,marginTop:12}}>
                            <Menu.Item><a href="#/" style={{color:'#FFF',fontSize:20,fontWeight:700}}>HomePage</a></Menu.Item>
                            <Menu.Item><a href="#/explore" style={{color:'#FFF',fontSize:20,fontWeight:700}}>Explore</a></Menu.Item>
                        </Menu>
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
