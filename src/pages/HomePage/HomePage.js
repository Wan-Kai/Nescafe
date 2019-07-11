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
                                            <h1 className="home-page-small-text">Manage all of your organizations</h1>
                                        </layout>
                                    </Col>
                                    <Col lg={12} md={24} style={{marginTop:50}}>
                                        <div style={{marginLeft:100}}>
                                            <img alt="" src={Layer1}/>
                                        </div>
                                    </Col>
                                </Row>
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
