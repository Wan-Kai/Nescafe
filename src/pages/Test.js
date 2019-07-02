import React from 'react';
import { Card, Col, Row,Carousel ,Icon,Avatar} from 'antd';
import mlogo from '../assets/img/mlogo.png'
import './pagesStyle/Test.less'

const { Meta } = Card;

class AuthPage extends React.Component {


    render() {
        return (
            <div className="layout">
                <div className="car">
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
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
