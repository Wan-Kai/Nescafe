import React from 'react';
import 'antd/dist/antd.css';
import './Forms.css';
import {Modal, Form, Input, Radio, Icon, Row, Col, Button, Select, Steps, Descriptions, Upload} from 'antd';
import {receiveInfo} from "../../actions/registerActions"
const { Step } = Steps;
//todo 完成后跳转login，即销毁


class formOfStepOne extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            receivedAndNext:false,
        }
    }

    values = null

    handleSubmitStepOne = e =>{
        const{receivedAndNext} = this.state
        const {dispatch,changeCurrent} = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values) => {
            if(!err) {
                if (receivedAndNext) {
                    changeCurrent(1);
                } else {
                    dispatch(receiveInfo(values['type'], values['id'],
                        () => {
                            this.setState({
                                receivedAndNext: true
                            })//todo  isReceived can replaced?   必须要一个放values
                            //todo response  try setsession
                        }
                    ))// do with DB;
                    //todo 当
                }
                console.log('Received values of LoginPage: ', values);
            }
        })
    };

    handleGetValue = (response)=>{
        this.values = response
    }

    handleReceiveInfo = (values)=>{
        return (
            <Descriptions title="Company Info" className="register-form-descriptions">
                <Descriptions.Item label="UserName">{values[0]}</Descriptions.Item>
                <Descriptions.Item label="Telephone">{values[1]}</Descriptions.Item>
                <Descriptions.Item label="Live">{values[2]}</Descriptions.Item>
                <Descriptions.Item label="Remark">{values[3]}</Descriptions.Item>
                <Descriptions.Item label="Address">{values[4]}</Descriptions.Item>
            </Descriptions>
        )
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const { receivedAndNext } = this.state;
        const prefixSelector = getFieldDecorator('type', {
            initialValue: '统一社会信用代码',
        })(
            <Select style={{width: 160}}>
                <Select value="COne">统一社会信用代码</Select>
                <Select value="CTwo">组织机构代码</Select>
                <Select value="CThird">股票代码</Select>

            </Select>,
        );
        return (
            <Form layout="vertical" className='forget-forms'>
                <Form.Item style={{marginBottom: '1em',width:350}}>
                    {getFieldDecorator('id', {
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(<Input
                        prefix={<Icon type="info" />}
                        placeholder="Unique Code"
                        addonBefore={prefixSelector}
                    />)}
                </Form.Item>
                <div className="register-page-information">
                </div>
                {receivedAndNext?this.handleReceiveInfo:null}
                <Button onClick={this.handleSubmitStepOne} style={{textAlign:"center"}}>
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


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export class FormOfStepThird extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: '',
                status: '',
                url: '',
            },
        ],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action="https://scf.intellizhi.cn/user/paperUpload"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    name="paperFiles"
                    multiple={true}
                >
                    {fileList.length >= 4 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
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
            content: <FormOfStepOne changeCurrent = {this.handleNext.bind(this)}/>,//todo 换成表格组件  先做telephone的
            icon:<Icon type="info-circle" />
        },
        {
            id:1,
            title: 'validator',
            content: <FormOfStepTwo  changeCurrent = {this.handleDone.bind(this)}/>,//todo 重新修改密码的表格，一样的
            icon:<Icon type="check-circle" />
        },
        {
            id:2,
            title: 'upload',
            content: <FormOfStepThird/>,
            icon:<Icon type="upload" />
        },
    ];

    render() {
        const {current} = this.state;
        return (
            <div>
                {console.log("it done")}
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

export default NewRegister;
