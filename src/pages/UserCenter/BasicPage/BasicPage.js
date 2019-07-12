import React from 'react';
import {Avatar, Button, Col, Input, Row, Select} from "antd";
import myLogo from "../../../assets/img/mlogo.png";

const InputGroup = Input.Group;
const { Option } = Select;
const { TextArea } = Input;

class BasicPage extends React.Component{


    render(){
        return(
            <div className="user-center-setting-main" style={{display:"flex"}}>
                <div className="user-center-setting-table">
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

                <div className="user-center-setting-avatar">
                    <p>头像</p>
                    <Avatar src={myLogo} style={{width:150,height:150}}/><br/>
                    <Button type="primary" shape="round" icon="download">更换头像</Button>
                </div>
            </div>
        )
    }

}

export default BasicPage;
