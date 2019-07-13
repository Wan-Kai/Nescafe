import React from 'react';
import {Layout, Icon, Button, Menu, Avatar, Dropdown,Input} from "antd";
import Logo from '../../assets/img/mlogo.png'
import '../UserCenterLayout/UserCenterLayout.less'
import './HomeLayout.less'
import {connect} from "react-redux";
import Badge from "antd/es/badge";
import {loginActions} from "../../actions/loginAction";

const {Search} = Input;
const {Header,Footer,Content} = Layout;

const rightTopMenu = (  <Button type="primary" shape="round" size="default" style={{backgroundColor:'#ff6c37',border:'transparent'}}>
                            <b><a href="#/login" style={{color:'#FFF'}}>SIGN IN</a></b>
                        </Button>);

const MenuUser=(handleLogOut)=> (
    <Menu>
        <Menu.Item>
            <a href="#/user" rel="noopener noreferrer">
                个人中心
            </a>
        </Menu.Item>
        <Menu.Item>
        <a target="user" rel="noopener noreferrer">
                未读消息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_self" rel="noopener noreferrer" href="#/user/setting" >
                设置
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={handleLogOut}>
                注销
            </a>
        </Menu.Item>

    </Menu>
);

class homeLayout extends React.Component{

    handleLogOut = () => {
        this.props.dispatch(loginActions.logout())
    }

    render(){
        const { children,loggedIn } = this.props;
        return (
            <Layout className="home-page-layout" style={{minHeight:'-webkit-fill-available'}}>
                <Header style={{ background: '#96cfc9', padding: 0,height:60}}>
                    <div className="headerInLeft">
                        <h2 style={{color:'#FFF',width: 180}}><img src={Logo} className="home-logo"/>PixelCube</h2>
                        <Search
                            placeholder="input search text"
                            style={{ width: 150 ,height:30,marginTop:16}}
                        />
                        <Menu mode="horizontal" style={{float:'left',background:'transparent',marginLeft:30,lineHeight:2.5,marginTop:6}}>
                            <Menu.Item><a href="#/" style={{color:'#FFF',fontSize:20,fontWeight:700}}>HomePage</a></Menu.Item>
                            <Menu.Item><a href="#/explore" style={{color:'#FFF',fontSize:20,fontWeight:700}}>Explore</a></Menu.Item>
                        </Menu>
                    </div>
                    <div className="headerInRight">
                        {loggedIn?(<Dropdown overlay= {MenuUser(this.handleLogOut)}>
                                        <span style={{marginRight: '1em'}}>
                                            <Badge count={1}>
                                                <Avatar icon="user"/>
                                            </Badge>
                                        </span>
                            </Dropdown>
                        ):rightTopMenu}
                    </div>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer style={{background:'#000000'}}>
                    <div className="home-footer" >
                        <div className="home-footer-item" style={{width:'30%'}}>
                            <div className="home-footer-item-logo">
                                <img src={Logo} style={{width:80,height:80}}/>
                                <div  className="home-footer-item-logo-text">
                                    <h1 className="home-footer-item-logo-text-h1">花旗杯创新项目</h1>
                                    <h2 className="home-footer-item-logo-text-h2">Citicup Innovation</h2>
                                </div>
                            </div>
                        </div>
                        <div className="home-footer-item" style={{width:'10%'}}>
                            <div className="home-footer-item-item">
                                <a className="home-footer-item-text">关于我们</a>
                                <p className="home-footer-item-text-small-text">团队</p>
                                <p className="home-footer-item-text-small-text">产品</p>
                            </div>

                        </div>
                        <div className="home-footer-item" style={{width:'10%'}}>
                            <div className="home-footer-item-item">
                                <a className="home-footer-item-text">特性</a>
                                <p className="home-footer-item-text-small-text">服务</p>
                                <p className="home-footer-item-text-small-text">影响</p>
                            </div>
                        </div>
                        <div className="home-footer-item" style={{width:'10%'}}>
                            <div className="home-footer-item-item">
                                <a className="home-footer-item-text">博客</a>
                                <p className="home-footer-item-text-small-text">条款和条件</p>
                                <p className="home-footer-item-text-small-text">隐私</p>
                            </div>
                        </div>
                    </div>
                    <p className="home-footer-foot-text">© 2019 PixelCube, All right reserved</p>
                </Footer>

            </Layout>
        );
    }

}

function mapStateToProps(state){
    const {loggedIn} = state.authentication
    return {loggedIn}
}

const HomeLayout = connect(mapStateToProps)(homeLayout)

export default HomeLayout;
