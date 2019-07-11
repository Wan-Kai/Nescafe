import React from 'react';
import {Layout, Icon, Col, Row, Button,Card,Avatar,Anchor} from "antd";
import Logo from '../../assets/img/mlogo.png'
import Layer1 from '../../assets/img/Layer1.png';
import Layer from '../../assets/img/Layer.png';
import New from '../../assets/img/new.svg'
import BackGround from '../../assets/img/back.jpg'
import './HomePage.less'
import PersonalData from "../../components/PersonalPage/personalData";
import CompanyData from "../../components/PersonalPage/companyData";
import FinanceCard from '../../components/Cards/FinanceCard';
import NewsCard from '../../components/Cards/NewsCard';
import NewsCardInRow from "../../components/Cards/NewsCardInRow";

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
                                                width:180,height:60,}}>
                                                <b><a href="#choice" style={{color:'#FFF'}}>Get Start</a></b>
                                            </Button>
                                            <h1 className="smallText">Manage all of your organizations</h1>
                                        </layout>
                                    </Col>
                                    <Col lg={12} md={24} style={{marginTop:50}}>
                                        <div style={{marginLeft:100}}>
                                            <img src={Layer1}/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="center">
                               <div className="home-flex-news">
                                   <div className="home-flex-news-components">
                                       <NewsCard/>
                                   </div>
                                   <div className="home-flex-news-components">
                                       <NewsCard/>
                                   </div>
                                   <div className="home-flex-news-components">
                                       <NewsCard/>
                                   </div>
                               </div>

                                <div className="home-flex-finance" id='choice'>
                                    <div className="home-flex-finance-components">
                                        <FinanceCard/>
                                    </div>
                                    <div className="home-flex-finance-components">
                                        <FinanceCard/>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>

            </Layout>
        )
    }

}

export default HomePage;
