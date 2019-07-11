import React from 'react';
import {Card,Menu,Layout,Input,Select,Row,Col,Button} from 'antd';
import './UserSetting.less';

const {Content,Header,Component} = Layout;
const InputGroup = Input.Group;
const { Option } = Select;
const { TextArea } = Input;

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    }

]
class UserSetting extends React.Component{
    render() {
        return (
            <div className="user-center-setting-contain">
                <div>
                    <Card>
                        <div className="user-center-setting-flex">
                            <div className="user-center-setting-menu">
                                <Menu
                                    style={{ width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    mode="inline"
                                >
                                    <Menu.Item>基本设置</Menu.Item>
                                    <Menu.Item>安全设置</Menu.Item>
                                    <Menu.Item>账号绑定</Menu.Item>
                                    <Menu.Item>新消息通知</Menu.Item>
                                </Menu>
                            </div>

                            <div className="user-center-setting-page">
                                <h2>基本设置</h2>
                                <div className="user-center-setting-page-components">
                                    <p>邮箱</p>
                                    <Input style={{ width: '50%' }} defaultValue="email"/>
                                </div>
                                <div className="user-center-setting-page-components">
                                    <p>昵称</p>
                                    <Input style={{ width: '50%' }} defaultValue="Lee Zhi"/>
                                </div>
                                <div className="user-center-setting-page-components">
                                    <p>个人简介</p>
                                    <TextArea rows={4}/>
                                </div>
                                <div className="user-center-setting-page-components">
                                    <p>国家/地区</p>
                                    <Select defaultValue="China">
                                        <Option value="China">中国</Option>
                                        <Option value="England">英国</Option>
                                    </Select>
                                </div>
                                <div className="user-center-setting-page-components">
                                    <p>所在省市</p>
                                    <InputGroup compact>
                                        <Select defaultValue="Option1-1">
                                            <Option value="Option1-1">省份</Option>
                                            <Option value="Option1-2">省份</Option>
                                        </Select>
                                        <Select defaultValue="Option2-2">
                                            <Option value="Option2-1">市级</Option>
                                            <Option value="Option2-2">市级</Option>
                                        </Select>
                                    </InputGroup>
                                </div>
                                <div className="user-center-setting-page-components">
                                    <p>街道地址</p>
                                    <Input style={{ width: '50%' }} defaultValue="街道地址"/>
                                </div>
                                <div className="user-center-setting-page-components">
                                    <p>联系电话</p>
                                    <InputGroup size="large">
                                        <Row gutter={8}>
                                            <Col span={5}>
                                                <Input defaultValue="0571" />
                                            </Col>
                                            <Col span={8}>
                                                <Input defaultValue="26888888" />
                                            </Col>
                                        </Row>
                                    </InputGroup>
                                </div>
                                <div className="user-center-setting-page-components">
                                    <Button type="primary">更新基本信息</Button>
                                </div>
                            </div>

                        </div>

                    </Card>
                </div>
            </div>
        )

    }
}

export default UserSetting;
