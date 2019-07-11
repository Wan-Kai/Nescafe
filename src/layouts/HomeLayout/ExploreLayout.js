import React from 'react';
import {Layout, Icon, Button, Menu, Dropdown, Avatar} from "antd";
import Logo from '../../assets/img/mlogo.png'
import '../UserCenterLayout/UserCenterLayout.less'
import './HomeLayout.less'
import Badge from "antd/es/badge";
import {loginActions} from "../../actions/loginAction";
import {connect} from "react-redux";

const {Header,Footer,Content} = Layout;


const rightTopMenu = (  <Button type="primary" shape="round" size="middle" style={{backgroundColor:'#ff6c37',border:'transparent'}}>
    <b><a href="#/login" style={{color:'#FFF'}}>SIGN IN</a></b>
</Button>);

const MenuUser=(handleLogOut)=> (
    <Menu>
        <Menu.Item>
            <a target="/user" rel="noopener noreferrer">
                个人中心
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="user" rel="noopener noreferrer">
                未读消息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">
                个人信息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" onClick={handleLogOut}>
                注销
            </a>
        </Menu.Item>
    </Menu>
);


class exploreLayout extends React.Component{
    handleLogOut = () => {
        this.props.dispatch(loginActions.logout())
    }
    render(){
        const { children,loggedIn } = this.props;
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
                        {console.log(loggedIn)}
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
                        <p>Copyright by Wan</p>
                    </div>
                </Footer>
            </Layout>
        );
    }

}
function mapStateToProps(state){
    const {loggedIn} = state.authentication
    return {loggedIn}
}

const ExploreLayout = connect(mapStateToProps)(exploreLayout)

export default ExploreLayout;
