import React from 'react';
import {Layout,Icon,Button,Menu} from "antd";
import Logo from '../../assets/img/mlogo.png'
import '../UserCenterLayout/UserCenterLayout.less'
import './HomeLayout.less'

const {Header,Footer,Content} = Layout;

class ExploreLayout extends React.Component{
    render(){
        const { children } = this.props;
        return (
            <Layout>
                <Header style={{ background: '#FFF', padding: 0,height:60}}>
                    <div className="headerInLeft">
                        <h2 style={{color:'#000000',width: 180}}><img src={Logo} className="home-logo"/>Pixel Cube</h2>
                        <Menu mode="horizontal" style={{float:'left',background:'transparent',marginLeft:30,lineHeight:2.5,marginTop:6}}>
                            <Menu.Item><a href="#/" style={{color:'#000000',fontSize:20,fontWeight:700}}>HomePage</a></Menu.Item>
                            <Menu.Item><a href="#/explore" style={{color:'#000000',fontSize:20,fontWeight:700}}>Explore</a></Menu.Item>
                        </Menu>
                    </div>
                    <div className="headerInRight">
                        <Button type="primary" shape="round" size="middle" style={{backgroundColor:'#ff6c37',border:'transparent'}}>
                            <b><a href="#/login" style={{color:'#FFF'}}>SIGN IN</a></b>
                        </Button>
                    </div>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer style={{background:'#000000'}}>
                    <div className="home-footer" >
                        <p>Copyright by Wan</p>
                    </div>
                </Footer>
            </Layout>
        );
    }

}

export default ExploreLayout;
