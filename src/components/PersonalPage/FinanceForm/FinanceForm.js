import React from 'react';
import 'antd/dist/antd.css';
import {Form, Icon, Input, Button, Checkbox, Col, Row, Divider, Anchor, InputNumber} from 'antd';
import Spin from "antd/es/spin";
import QueueAnim from "rc-queue-anim";
import MonthRangePicker from "../../ItemOfForms/MonthRangePicker"
import './index.less'

class investForm extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            search: false,
            monthRange: []
        }
    }


    handleMonthRange = (value) =>{
        console.log(value)
        if(!value[0]||!value[1]){

        }else if(value[0]&&value[1]){
            console.log([value[0].format('YYYYMM'),value[1].format('YYYYMM')])
            this.setState({monthRange:[value[0].format('YYYYMM'),value[1].format('YYYYMM')]})
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        const{monthRange} = this.state
        if(monthRange[0]!==undefined&&monthRange[1]){
            this.props.form.setFieldsValue({monthRange:this.state.monthRange})
        }

        const {validateFields} = this.props.form
        validateFields((err,values)=>{
            console.log(err)
            if(!err){
                console.log('Receive values of form: ',values)
                //todo:when finished the function of AXIOS,back here to do sth
            }
        })
    }


    render() {
        const {searching} = this.props;
        const {getFieldDecorator} = this.props.form;

        return (
            //todo 字体大小  基本状态redux
            <div className='finance-container'>
                <QueueAnim delay={100} component="div" type="left">
                    <div key='0' className="finance-left-search">
                        <div className='finance-left-search-slogan'>
                            我要融资<Icon type="money-collect"/>
                        </div>
                        <Spin spinning={searching === undefined ? false : searching}>
                            <Anchor className='finance-left-search-anchor'>
                                <div className='finance-left-search-form'>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Item label="融资金额" >
                                            {getFieldDecorator('amountOfMoney', {
                                                rules: [{required: true, message: '请输入融资金额：'},],
                                            })(<InputNumber min={0}
                                                            prefix={<Icon type="dollar" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                            parser={value => value.replace(/\￥\s?|(,*)/g, '')}
                                                            placeholder="金额"
                                                            style={{width:'18em'}}
                                            />)}
                                        </Form.Item>
                                        <Form.Item label="时间范围" style={{marginTop: "-5%"}}>
                                            {getFieldDecorator('monthRange', {
                                                rules: [
                                                    {required: true, message: '请选择时间范围：'},
                                                ],
                                            })(<MonthRangePicker handleMonthRange={(value)=>{this.handleMonthRange(value)}}/>)}
                                        </Form.Item>
                                        <Form.Item label="融资模式" style={{marginTop: '-5%'}}>
                                            {getFieldDecorator('mode', {initialValue:"Financing Rent"})(
                                                <Checkbox.Group style={{width: '100%', lineHeight: '2.5'}}>
                                                    <Row className='finance-form-row'>
                                                        <Col span={12}>
                                                            <Checkbox value="privateCredit">民间信贷</Checkbox>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Checkbox value="p2pFinancing">P2P融资</Checkbox>
                                                        </Col>
                                                    </Row>
                                                    <Row className='finance-form-row'>
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
                            </Anchor>
                        </Spin>
                        <div className='finance-divider'>
                        <Divider orientation="center" type="horizontal" style={{height:'100%'}}/>
                        </div>
                        </div>
                </QueueAnim>
                <Divider type="vertical"/>
                <div className='finance-right-outcome'>
                    <div className='finance-right-outcome-slogan'>
                        <Icon type="search"/>符合请求的机构如下：
                    </div>
                    <div className='finance-right-outcome-container'>
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
