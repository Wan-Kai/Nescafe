import React from 'react';
import {Layout, Icon, Col, Row, Button,Card,Avatar} from "antd";
import Logo from '../../assets/img/mlogo.png'
import New from '../../assets/img/new.svg'
import BackGround from '../../assets/img/back.jpg'
import './HomePage.less'
import PersonalData from "../../components/PersonalPage/personalData";
import CompanyData from "../../components/PersonalPage/companyData";
const {Header,Footer} = Layout;

const backgroundStyle = {
    width: '100%',
    backgroundImage: `url(${BackGround})`
};

class HomePage extends React.Component{
    render(){
        return (
            <Layout>
                <div  style={backgroundStyle}>
                    <div className="container">
                            <div className="center">
                                <Row gutter={24}>
                                    <Col lg={12} md={24}>
                                        <layout className="titleFix">
                                            <img src={New} className="new"/>
                                            <h1 className="text" >Supply Chain Finance</h1>
                                            <Button type="primary" style={{
                                                backgroundColor:'#ff6c37',
                                                border:'transparent',
                                                fontSize:30,
                                                width:180,height:60}}>
                                                <b>Get Start</b>
                                            </Button>
                                            <h1 className="smallText">Manage all of your organizations</h1>
                                        </layout>
                                    </Col>
                                    <Col lg={12} md={24} style={{marginTop:70}}>
                                        <div >
                                            <img src={Logo}/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="center">
                                <Row gutter={24} >
                                    <div className="cards">
                                        <Col span={8}  className="ColInCenter">
                                            <Card className="card">
                                                <div className="card-center">
                                                    <Avatar src={Logo} style={{width:100,height:100}}/>
                                                    <h1 className="cardText">FINANCING</h1>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={8} className="ColInCenter">
                                            <Card   className="card">
                                                <div className="card-center">
                                                    <Avatar src={Logo} style={{width:100,height:100}}/>
                                                    <h1 className="cardText">INVESTING</h1>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={8} className="ColInCenter">
                                            <Card   className="card">
                                                <div className="card-center">
                                                    <Avatar src={Logo} style={{width:100,height:100}}/>
                                                    <h1 className="cardText">INVESTING</h1>
                                                </div>
                                            </Card>
                                        </Col>
                                    </div>
                                </Row>
                            </div>

                        </div>
                </div>

            </Layout>
        )
    }

}

export default HomePage;
