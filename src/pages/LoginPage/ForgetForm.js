import React from 'react';
import 'antd/dist/antd.css';
import './Forms.css';
import {Modal, Form, Input, Radio, Icon, Row, Col, Button, Select, Steps} from 'antd';

const { Step } = Steps;
//todo 完成后跳转login，即销毁


class formOfStepOne extends React.Component{
    handleSubmitStepOne = e =>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values) => {
            if(!err){
                //todo dowith DB;
                this.props.changeCurrent(1);
                console.log('Received values of LoginPage: ', values);
            }
        })
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Select value="86">+86</Select>
                <Select value="10">+10</Select>
            </Select>,
        );
        return (
            <Form layout="vertical" className='forget-forms'>
                <Form.Item style={{marginBottom: '1em',width:255}}>
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(<Input
                        prefix={<Icon type="phone"/>}
                        placeholder="Phone Number"
                        addonBefore={prefixSelector}
                    />)}
                </Form.Item>

                <Form.Item>
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{required: true, message: 'Please input the captcha you got!'}],
                            })(<Input prefix={<Icon type="message" style={{float: 'right'}}/>}/>)}
                        </Col>
                        <Col span={12}>
                            <Button style={{float: 'left'}}>Get captcha</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Button onClick={this.handleSubmitStepOne}>
                    Next
                </Button>
            </Form>);
    }
}

const FormOfStepOne = Form.create({ name: 'stepOneForm' })(formOfStepOne);


class formOfStepTwo extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            canNext:false,
        }
    }

    handleSummitStepTwo = e =>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            if(!err){
                //todo 数据库io处理
                this.props.changeCurrent(2);
                this.props.doneAndCancel();//异步关闭对话框
                console.log('Received values of LoginPage: ', values)
            }
        })
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            this.setState({
                canNext:true,
            });
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };
    //todo 储存password

    render() {
        const {password} = this.props;
        const {getFieldDecorator} = this.props.form;
        return (
            <Form >
                <Form.Item hasFeedback >
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input
                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        type="password"
                        placeholder="Password"
                    />,)}
                </Form.Item>
                <Form.Item hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input
                        prefix={<Icon type="lock"/>}
                        type="password"
                        placeholder="Confirm"
                        onBlur={this.handleConfirmBlur}/>)}
                </Form.Item>
                <Button onClick={this.handleSummitStepTwo}>
                    Done
                </Button>
            </Form>);
    }
}

const FormOfStepTwo = Form.create({name:"StepTwoForm"})(formOfStepTwo);



class StepForm extends React.Component {
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
            title: 'Validate',
            content: <FormOfStepOne changeCurrent = {this.handleNext.bind(this)}/>,//todo 换成表格组件  先做telephone的
            icon:<Icon type="question-circle" />
        },
        {
            id:1,
            title: 'Reset',
            content: <FormOfStepTwo doneAndCancel={this.props.doneAndCancel} changeCurrent = {this.handleDone.bind(this)}/>,//todo 重新修改密码的表格，一样的
            icon:<Icon type="schedule" />
        },
        {
            id:2,
            title: 'Done',
            content:    (<div className='step-form-third-content'>
                            <Icon type="edit" />
                            Please Remember Your Password!
                        </div>),
            icon:<Icon type="smile" />
        },
    ];

    render() {
        const {current} = this.state;
        const { phone,password } = this.props;
        const { onCancel } = this.props;
        return (
            <div>
                <Steps current={current}>
                    {this.steps.map(item => (
                        <Step key={item.id} title={item.title} icon={ item.icon }/>
                        //todo 只要检测到验证码正确就改图标
                    ))}
                </Steps>
                <div className="steps-content">{this.steps[current].content}</div>
            </div>
        );
    }
}


class findPasswordModal extends React.Component {
    render() {
        const { visible, onCancel} = this.props;
        return (
            <Modal
                centered={true}
                style={{paddingRight:'4em'}}
                visible={visible}
                title="Find Your Password"
                maskClosable={false}
                onCancel={onCancel}
                footer={null}
                destroyOnClose={true}
            >
                <StepForm doneAndCancel={this.props.doneAndCancel} />
            </Modal>
        );
    }
}

const ForgetFormModal = Form.create({ name: 'form_in_modal' })(findPasswordModal);

class forgetForm extends React.Component {
    state = {
        visible: false,
    };
    //TODo the data
    showModal = () => {
        this.setState({ visible: true });
    };

    handleChangeDone(){
        setTimeout(() => {this.setState({
            visible:false,
        })},1000)
    }

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div>
                <a onClick={this.showModal}>
                    Forgot password
                </a>
                <ForgetFormModal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    doneAndCancel={this.handleChangeDone.bind(this)}
                />
            </div>
        );
    }
}

export default forgetForm;




