import React from 'react';
import { Card, Col, Row,Carousel ,Icon,Avatar} from 'antd/lib/index';
import mlogo from '../../assets/img/mlogo.png'
import NewsCard from '../NewsCenter/NewsCard';
import NewsCardInRow from '../NewsCenter/NewsCardInRow';
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
            <div className="layout">
                <div className="car">
                    <Carousel autoplay>
                        <div>
                            <img className="img" alt="example" src={background}/>
                        </div>
                        <div>
                            <img className="img" alt="example" src={beauty}/>
                        </div>
                        <div>
                            <img className="img" alt="example" src={smile}/>
                        </div>
                        <div>
                            <img className="img" alt="example" src={dragonMom}/>
                        </div>
                    </Carousel>
                </div>

                <div className="row">
                    <div className="col">
                        <Row gutter={32}>
                            <Col span={6}>
                                <NewsCard/>
                            </Col>
                            <Col span={6}>
                                <NewsCard/>
                            </Col>
                            <Col span={6}>
                                <NewsCard/>
                            </Col>
                            <Col span={6}>
                                <NewsCard/>
                            </Col>
                        </Row>
                    </div>

                    <div className="col">
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
