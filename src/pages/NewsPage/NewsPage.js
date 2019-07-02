import React from 'react';

import { Card, Col, Row,Carousel ,Icon,Avatar} from 'antd/lib/index';
import mlogo from '../../assets/img/mlogo.png'
import './NewsPage.less'
import backgrand from '../../assets/img/backgrand.png'
import beauty from '../../assets/img/beauty.jpg'
import smail from '../../assets/img/smail.jpg'
import dragenMom from '../../assets/img/drangenMom.jpg'

const { Meta } = Card;

class AuthPage extends React.Component {


    render() {
        return (
            <div className="layout">
                <div className="car">
                    <Carousel autoplay>
                        <div>
                            <img className="img"
                                alt="example"
                                src={backgrand}
                            />
                        </div>
                        <div>
                            <img className="img"
                                 alt="example"
                                 src={beauty}
                            />
                        </div>
                        <div>
                            <img className="img"
                                 alt="example"
                                 src={smail}
                            />
                        </div>
                        <div>
                            <img className="img"
                                 alt="example"
                                 src={dragenMom}
                            />
                        </div>
                    </Carousel>
                </div>

                <div className="row">
                    <div className="col">
                        <Row gutter={32}>
                            <Col span={6}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
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
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={mlogo}
                                        />
                                    }
                                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                >
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
