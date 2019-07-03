import React from 'react';

import { Card, Col, Row,Carousel ,Icon,Avatar} from 'antd/lib/index';
import mlogo from '../../assets/img/mlogo.png'
import './NewsPage.less'
import background from '../../assets/img/background.png'
import beauty from '../../assets/img/beauty.jpg'
import smile from '../../assets/img/smile.jpg'
import dragonMom from '../../assets/img/drangonMom.jpg'

const { Meta } = Card;

class AuthPage extends React.Component {

    render() {
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
                                <Card cover={<img alt="example" src={mlogo} />}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card cover={<img alt="example" src={mlogo}/>}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card cover={<img alt="example" src={mlogo}/>}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card cover={<img alt="example" src={mlogo}/>}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="col">
                        <Row gutter={32}>
                            <Col span={6}>
                                <Card cover={<img alt="example" src={mlogo}/>}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card cover={<img alt="example" src={mlogo}/>}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card cover={<img alt="example" src={mlogo}/>}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card cover={<img alt="example" src={mlogo}/>}
                                      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

export default AuthPage;
