import React from 'react';
import 'antd/dist/antd.css';
import {Form, Icon, Input, Button, InputNumber, Divider, Anchor} from 'antd';
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
                    <div key='0' className="invest-left-search">
                        <div className='invest-left-search-slogan'>
                            我要投资<Icon type="money-collect"/>
                        </div>
                        <Spin spinning={searching === undefined ? false : searching}>
                            <div className='invest-left-search-form'>
                                <Anchor className='invest-left-search-anchor'>
                                <Form onSubmit={this.handleSubmit} className='invest-left-search-form'>
                                    <Form.Item label="投资金额">
                                        {getFieldDecorator('amountOfMoney', {
                                            rules: [{required: true, message: '请输入投资金额：'},
                                                {validator: this.handleNumber}],
                                        })(
                                            <Input
                                                prefix={<Icon type="dollar" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder="金额"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="时间范围" style={{marginTop: "-10%"}}>
                                        {getFieldDecorator('monthRange', {
                                            rules: [{required: true, message: '请选择时间范围：'}],
                                        })(<MonthRangePicker/>)}
                                    </Form.Item>
                                    <Form.Item label="最低信誉分" style={{marginTop: '-10%'}}>
                                        {getFieldDecorator('creditScore',{
                                            rules:[{required:true,message:'请选择最低信誉分'}]
                                        })(<InputNumber min={30} max={100} defaultValue={60}/>)}
                                    </Form.Item>
                                    <div style={{textAlign: "center"}}>
                                        <Button type="primary" shape="round" htmlType="submit" icon="search"
                                                style={{margin: "auto"}}>
                                            match now!
                                        </Button>
                                    </div>
                                </Form>
                                </Anchor>
                            </div>
                        </Spin>
                    </div>
                </QueueAnim>
                <Divider type="vertical"/>
                <div className='invest-right-outcome'>
                    <div className='invest-right-outcome-slogan'>
                        <Icon type="search"/>符合请求的企业如下：
                    </div>
                    <div className='invest-right-outcome-container'>


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
