import React from 'react';
import 'antd/dist/antd.css';
import {Form, Icon, Button, InputNumber, Divider, Anchor, Tabs} from 'antd';
import Spin from "antd/es/spin";
import QueueAnim from "rc-queue-anim";
import MonthRangePicker from "../../ItemOfForms/MonthRangePicker"
import './index.less'

const { TabPane } = Tabs;

class investForm extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            search:false,
            monthRange:[]
        }
    }


    handleSubmit = e =>{
        e.preventDefault();
        const{monthRange} = this.state
        if(monthRange[0]!==undefined&&monthRange[1]){
            this.props.form.setFieldsValue({monthRange:this.state.monthRange})
        }

        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('Receive values of form: ',values)
                //todo:when finished the function of AXIOS,back here to do sth

            }
        })
    }

    handleMonthRange = (value) =>{
        console.log(value)
        if(!value[0]||!value[1]){

        }else if(value[0]&&value[1]){
            console.log([value[0].format('YYYYMM'),value[1].format('YYYYMM')])
            this.setState({monthRange:[value[0].format('YYYYMM'),value[1].format('YYYYMM')]})
        }
    }

    render() {
        const {searching} = this.props;
        const {getFieldDecorator} = this.props.form;

        return (

            //todo 字体大小  基本状态redux
            <div className="invest-root">
                <div className='invest-container'>
                    <QueueAnim delay={100} component="div" type="left">
                        <div key='0' className="invest-left-search">
                            <div className='invest-left-search-tag'>
                                <Tabs defaultActiveKey="1" onChange={this.handleFinancingType}>
                                    <TabPane tab="应收账款"  key="1">
                                    </TabPane>
                                    <TabPane tab="融通仓" key="2">
                                    </TabPane>
                                    <TabPane tab="预付款" key="3">
                                    </TabPane>
                                </Tabs>
                            </div>
                            <Spin spinning={searching === undefined ? false : searching}>
                                <div className='invest-left-search-form'>
                                    <Anchor className='invest-left-search-anchor'>
                                        <Form onSubmit={this.handleSubmit} className='invest-left-search-form'>
                                            <Form.Item label="投资金额（以千为单位）">
                                                {getFieldDecorator('amountOfMoney', {
                                                    rules: [{required: true, message: '请输入投资金额：'},],
                                                })(<InputNumber min={0}
                                                                prefix={<Icon type="dollar" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                                formatter={value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                                placeholder="金额"
                                                                style={{width:'18em'}}
                                                />)}
                                            </Form.Item>
                                            <Form.Item label="时间范围" style={{marginTop: "-5%"}}>
                                                {getFieldDecorator('monthRange', {
                                                    rules: [{required: true, message: '请选择时间范围：'}],
                                                })(<MonthRangePicker handleMonthRange={this.handleMonthRange}/>)}
                                            </Form.Item>
                                            <Form.Item label="最低信誉分" style={{marginTop: '-5%'}}>
                                                {getFieldDecorator('creditScore',{
                                                    rules:[{required:true,message:'请选择最低信誉分'}]
                                                })(<InputNumber min={30} max={100} style={{width:'8em'}} />)}
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
            </div>

        );
    }

}

const InvestForm = Form.create({
    name:'Invest'
}) (investForm);

export default InvestForm;
