import React from 'react';
import 'antd/dist/antd.css';
import '../Forms.css';
import {Form, Input, Icon, Button, Select, Steps, Descriptions} from 'antd';
import {receiveInfo} from "../../../actions/registerActions"
import RegisterForm from "./RegisterForm"
import {connect} from "react-redux";
import Spin from "antd/es/spin";

const { Step } = Steps;
//todo 完成后跳转login，即销毁

class formOfStepZero extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            Validating:false,
            Received:false,
        }
    }

    handleSubmitStepZero = e => {
        const {dispatch} = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                dispatch(receiveInfo(values["type"], values["id"], () => {
                    this.setState({
                        Received:true,
                    })
                }))
            }
            console.log('Received values of LoginPage: ', values);
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {isValidating,isReceived,changeCurrent} = this.props;
        const {Received} = this.state
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
                <Form layout="vertical" className='forget-forms'>
                    <Form.Item style={{margin: "auto", width: 350,}}>
                        {getFieldDecorator('id', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input
                            prefix={<Icon type="info"/>}
                            placeholder="Unique Code"
                            addonBefore={prefixSelector}
                        />)}
                    </Form.Item>
                    <Button onClick={this.handleSubmitStepZero} style={{textAlign: "center"}}>
                        Next
                    </Button>
                    {Received||isReceived?changeCurrent(1):null}
                </Form>
            </Spin>

        );
    }
}
//todo  加一个状态使得可以
const FormOfStepZeroNotConnected = Form.create({ name: 'stepOneForm' })(formOfStepZero);


function mapStateToProps(state) {
    const {isValidating,isReceived} = state.registration
    return {isReceived,isValidating}
}

const FormOfStepZero = connect(mapStateToProps)(FormOfStepZeroNotConnected)


class formOfStepOne extends React.Component{

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


    handleReceiveInfo = (values)=>{
        return (
            <Descriptions title="Company Info" className="register-form-descriptions" column={1}>
                <Descriptions.Item label="公司地址">{values["comAddr"]}</Descriptions.Item>
                <Descriptions.Item label="公司名称">{values["comName"]}</Descriptions.Item>
                <Descriptions.Item label="邮箱">{values["email"]}</Descriptions.Item>
                <Descriptions.Item label="电话">{values["phone"]}</Descriptions.Item>
                <Descriptions.Item label="拥有人">{values["ownerName"]}</Descriptions.Item>
            </Descriptions>
        )
    }

    render() {
        const {response} = this.props
        return (
            <div>
                <Spin spinning={false} style={{marginRight:"2em"}}>
                    {response ? this.handleReceiveInfo(response) : null}
                    <div>
                        <Button onClick={this.handleSubmitStepOne}>
                            确认
                        </Button>
                    </div>
                </Spin>
            </div>
        )
    }
}

const FormOfStepOne = connect((state)=> {
    const {response} = state.registration
    return {response}
})
(formOfStepOne)


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
