import React from 'react';
import {Layout, Col, Row, Button,} from "antd";
import Layer1 from '../../assets/img/Layer1.png';
import New from '../../assets/img/new.svg'
import BackGround from '../../assets/img/back.jpg'
import './HomePage.less'
import FinanceCard from '../../components/Cards/FinanceCard';
import InvestCard from '../../components/Cards/InvestCard';
import NewsCard from '../../components/Cards/NewsCard';

const backgroundStyle = {
    width: '100%',
    backgroundImage: `url(${BackGround})`
};

class HomePage extends React.Component{
    render(){
        return (
            <Layout>
                <div  style={backgroundStyle}>
                    <div className="home-page-container">
                            <div className="home-page-center">
                                <Row gutter={24}>
                                    <Col lg={12} md={24} style={{marginTop:80}}>
                                        <layout className="home-page-title-fix">
                                            <img alt="new" src={New} className="new"/>
                                            <h1 className="home-page-text" >Supply Chain Finance</h1>
                                            <Button type="primary" style={{
                                                backgroundColor:'#ff6c37',
                                                border:'transparent',
                                                fontSize:30,
                                                width:180,height:60,}}>
                                                <b><a href="#choice" style={{color:'#FFF'}}>Get Start</a></b>
                                            </Button>
                                            <div className="home-page-small-text-contain">
                                                <h1 className="home-page-small-text">High-Availability, High-Relibility,
                                                    based on solid theoretical foundation.</h1>
                                                <h1 className="home-page-small-text"> A Financing Credit Risk Assessment System</h1>
                                            </div>
                                        </layout>
                                    </Col>
                                    <Col lg={12} md={24} style={{marginTop:50}}>
                                        <div style={{marginLeft:100}}>
                                            <img  src={Layer1}/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        <div className="home-page-big-text-contain">
                            <div className="home-page-big-text-contain-item">
                                <h1 className="home-page-big-text-contain-item-text">2724 +</h1>
                                <h1 className="home-page-big-text-contain-item-text2">Companies</h1>
                            </div>
                            <div className="home-page-big-text-contain-item">
                                <h1 className="home-page-big-text-contain-item-text">12,000 +</h1>
                                <h1 className="home-page-big-text-contain-item-text2">Data</h1>
                            </div>
                            <div className="home-page-big-text-contain-item">
                                <h1 className="home-page-big-text-contain-item-text">3</h1>
                                <h1 className="home-page-big-text-contain-item-text2">Algorithm</h1>
                            </div>
                        </div>
                            <div className="home-page-center">
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
                                        <InvestCard/>
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
