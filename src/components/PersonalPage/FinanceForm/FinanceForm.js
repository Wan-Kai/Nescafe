import React from 'react';
import 'antd/dist/antd.css';
import './index.css'
import {Form, Icon, Input, Button, Checkbox, DatePicker, Col, Row, Divider} from 'antd';
import Spin from "antd/es/spin";
import QueueAnim from "rc-queue-anim";
import MonthRangePicker from "../../ItemOfForms/MonthRangePicker"
import './index.less'
class investForm extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            search:false,
        }
    }


    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('Receive values of form: ',values)
            }
        })
    }

    handleNumber = (rule, value, callback)=>{
        const r1= /^[0-9]*[1-9][0-9]*$/;　　//正整数
        if(!value.match(r1)){
            callback('正整数');
        }
    }

    render() {
        const {searching} = this.props;
        const {getFieldDecorator} = this.props.form;
        const {value} = this.state;

        return (
            //todo 字体大小  基本状态redux
            <div className='invest-container'>
                <QueueAnim delay={100} component="div" type="left">
                    <div key='0' className="left-search">
                        <div className='left-search-slogan'>
                            我要融资<Icon type="money-collect"/>
                        </div>
                        <Spin spinning={searching === undefined ? false : searching}>
                            <div className='left-search-form'>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Item label="融资金额">
                                        {getFieldDecorator('amountOfMoney', {
                                            rules: [{required: true, message: '请输入融资金额：'},
                                                {validator: this.handleNumber}],
                                        })(
                                            <Input
                                                prefix={<Icon type="dollar" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder="金额"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="时间范围" style={{marginTop: "-2%"}}>
                                        {getFieldDecorator('monthRange', {
                                            rules: [{required: true, message: '请选择时间范围：'}],
                                        })(<MonthRangePicker/>)}
                                    </Form.Item>
                                    <Form.Item label="融资模式" style={{marginTop: '-2%'}}>
                                        {getFieldDecorator('checkbox-group', {})(
                                            <Checkbox.Group style={{width: '100%', lineHeight: '2.5'}}>
                                                <Row className='invest-form-row'>
                                                    <Col span={12}>
                                                        <Checkbox value="privateCredit">民间信贷</Checkbox>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Checkbox value="p2pFinancing">P2P融资</Checkbox>
                                                    </Col>
                                                </Row>
                                                <Row className='invest-form-row'>
                                                    <Col span={12}>
                                                        <Checkbox value="Financing Rent">融资租贷</Checkbox>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Checkbox value="crowdFunding">众筹</Checkbox>
                                                    </Col>
                                                </Row>
                                            </Checkbox.Group>,
                                        )}
                                    </Form.Item>
                                    <div style={{textAlign: "center"}}>
                                        <Button type="primary" shape="round" htmlType="submit" icon="search"
                                                style={{margin: "auto"}}>
                                            match now!
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Spin>
                    </div>
                </QueueAnim>
                <Divider type="vertical"/>
                <div className='right-outcome'>
                    <div className='right-outcome-slogan'>
                        <Icon type="search"/>符合请求的机构如下：
                    </div>
                    <div className='right-outcome-container'>


                    </div>
                </div>
            </div>
        );
    }

}

const InvestForm = Form.create({
    name:'Invest'
}) (investForm);

export default InvestForm;
