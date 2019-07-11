import React from 'react';
import { Card, Col, Row,Carousel ,Icon,Avatar} from 'antd/lib/index';
import mlogo from '../../assets/img/mlogo.png'
import NewsCard from '../../components/Cards/NewsCard';
import NewsCardInRow from '../../components/Cards/NewsCardInRow';
import './Explore.less'
import background from '../../assets/img/background.png'
import beauty from '../../assets/img/beauty.jpg'
import smile from '../../assets/img/smile.jpg'
import dragonMom from '../../assets/img/drangonMom.jpg'

const { Meta } = Card;

class AuthPage extends React.Component {

    render() {
        //todo 动态加减card
        return (
            <div className="explore-page-layout">
                <div className="explore-page-car">
                    <Carousel autoplay>
                        <div>
                            <img className="explore-page-img" alt="example" src={background}/>
                        </div>
                        <div>
                            <img className="explore-page-img" alt="example" src={beauty}/>
                        </div>
                        <div>
                            <img className="explore-page-img" alt="example" src={smile}/>
                        </div>
                        <div>
                            <img className="explore-page-img" alt="example" src={dragonMom}/>
                        </div>
                    </Carousel>
                </div>


                <div className="explore-page-contain">

                    <div className="explore-flex-news">
                        <div className="explore-flex-news-components">
                            <NewsCard/>
                        </div>
                        <div className="explore-flex-news-components">
                            <NewsCard/>
                        </div>
                        <div className="explore-flex-news-components">
                            <NewsCard/>
                        </div>


                    </div>

                    <div className="explore-flex-news-in-line">
                        <Row>
                            <NewsCardInRow/>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

export default AuthPage;
