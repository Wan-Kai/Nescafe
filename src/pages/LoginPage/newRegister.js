import React from 'react';
import 'antd/dist/antd.css';
import './Forms.css';
import {Modal, Form, Input, message, Icon, Row, Col, Button, Select, Steps, Descriptions, Upload} from 'antd';
import {receiveInfo} from "../../actions/registerActions"
import RegisterForm from "./RegisterForm"
import {connect} from "react-redux";
import Spin from "antd/es/spin";

const { Step } = Steps;
//todo 完成后跳转login，即销毁

class formOfStepZero extends React.Component {


    handleSubmitStepZero = e => {
        const {dispatch, changeCurrent,isValidating, isReceived} = this.props
        let Received = false
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                dispatch(receiveInfo(values["type"], values["id"], () => {
                    Received = true
                }))

                console.log(isReceived, isValidating)

                while (!isValidating) {
                    if (Received) {
                        changeCurrent(1);
                    } else {
                        message.error("you send a wrong id")
                    }
                }

                // dispatch(receiveInfo(values['type'], values['id'],
                //     () => {
                //         this.setState({
                //             received: true
                //         })//todo  isReceived can replaced?   必须要一个放values
                //         //todo response  try setsession
                //     }
                // ))// do with DB;
            }
            console.log('Received values of LoginPage: ', values);
        })
    };

    handleGetValue = (response) => {
        this.values = response
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {isValidating} = this.props;
        const prefixSelector = getFieldDecorator('type', {
            initialValue: '统一社会信用代码',
        })(
            <Select style={{width: 160}}>
                <Select value="creditCode">统一社会信用代码</Select>
                <Select value="orgCode">组织机构代码</Select>
                <Select value="regNo">股票代码</Select>
            </Select>,
        );
        return (
            <Spin spinning={isValidating}>
                {console.log(isValidating)}

                <Form layout="vertical" className='forget-forms'>
                    <Form.Item style={{marginBottom: '1em', width: 350}}>
                        {getFieldDecorator('id', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input
                            prefix={<Icon type="info"/>}
                            placeholder="Unique Code"
                            addonBefore={prefixSelector}
                        />)}
                    </Form.Item>
                    <div className="register-page-information">
                    </div>

                    <Button onClick={this.handleSubmitStepZero} style={{textAlign: "center"}}>
                        Next
                    </Button>
                </Form>
            </Spin>

        );
    }
}

const FormOfStepZeroNotConnected = Form.create({ name: 'stepOneForm' })(formOfStepZero);


function mapStateToProps(state) {
    const {isValidating,isReceived} = state.registration
    return {isReceived,isValidating}
}

const FormOfStepZero = connect(mapStateToProps)(FormOfStepZeroNotConnected)


class FormOfStepOne extends React.Component{

    handleSubmitStepOne = e =>{
        const {changeCurrent} = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values) => {
            if (!err) {
                changeCurrent(2)
                //todo 当
            }
            console.log('Received values of LoginPage: ', values);
        })
    };

    handleOnClick = ()=>{
        const {changeCurrent} = this.props
        changeCurrent(2)
    }


    handleReceiveInfo = (values)=>{
        return (
            <Descriptions title="Company Info" className="register-form-descriptions">
                <Descriptions.Item label="comName">{values["comName"]}</Descriptions.Item>
                <Descriptions.Item label="runFrom">{values["runFrom"]}</Descriptions.Item>
                <Descriptions.Item label="ownerName">{values["ownerName"]}</Descriptions.Item>
                <Descriptions.Item label="comType">{values["comType"]}</Descriptions.Item>
                <Descriptions.Item label="comAddr">{values["comAddr"]}</Descriptions.Item>
            </Descriptions>
        )
    }

    render(){
        return (
            <div>
            {this.handleReceiveInfo([1,2,3,4,5])}
            <Button onClick={this.handleOnClick}>
                next
            </Button>
            </div>
        )
    }
}


class NewRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            phone:null,
            password:null,
        };
    };

    handleNext(msg) {
        this.setState({current:msg});
    };

    handleDone(msg){
        this.setState({current:msg});
    };

    steps = [
        {
            id:0,
            title: 'input',
            content: <FormOfStepZero changeCurrent = {this.handleNext.bind(this)}/>,//todo 换成表格组件  先做telephone的
            icon:<Icon type="info-circle" />
        },
        {
            id:1,
            title: 'validate',
            content: <FormOfStepOne changeCurrent = {this.handleNext.bind(this)}/>,//todo 换成表格组件  先做telephone的
            icon:<Icon type="check-circle" />
        },
        {
            id:2,
            title: 'Info',
            content: <RegisterForm  changeCurrent = {this.handleDone.bind(this)}/>,//todo 重新修改密码的表格，一样的
            icon:<Icon type="plus-circle" />
        },
        {
            id:3,
            title: 'Well Done',
            content:<p>well done! please remember your id.</p>,
            icon:<Icon type="like" />
        },
    ];

    render() {
        const {current} = this.state;
        return (
            <div style={{width:500}}>
                {console.log("it done")}
                <Steps current={current}>
                    {this.steps.map(item => (
                        <Step key={item.id} title={item.title} icon={ item.icon }/>
                        //todo 只要检测到验证码正确就改图标
                    ))}
                </Steps>
                <div className="register-steps-content">{this.steps[current].content}</div>
            </div>
        );
    }
}

export default NewRegister;
