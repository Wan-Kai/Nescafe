import React from 'react';
import 'antd/dist/antd.css';
import './Forms.css';
import {Modal, Form, Input, message, Icon, Row, Col, Button, Select, Steps, Descriptions, Upload} from 'antd';
import {receiveInfo} from "../../actions/registerActions"
import RegisterForm from "./RegisterForm"

const { Step } = Steps;
//todo 完成后跳转login，即销毁

class formOfStepZero extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            received:true,
        }
    }

    values = null

    handleSubmitStepZero = e =>{
        const {dispatch,changeCurrent} = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values) => {
            if (!err) {
                changeCurrent(1);
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
        const { received } = this.state;
        const prefixSelector = getFieldDecorator('type', {
            initialValue: '统一社会信用代码',
        })(
            <Select style={{width: 160}}>
                <Select value="COne">统一社会信用代码</Select>
                <Select value="CTwo">组织机构代码</Select>
                <Select value="CThird">股票代码</Select>
            </Select>,
        );
        return (received?(
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
                <Button onClick={this.handleSubmitStepZero} style={{textAlign:"center"}}>
                    Next
                </Button>
            </Form>):this.handleReceiveInfo
    );
    }
}

const FormOfStepZero = Form.create({ name: 'stepOneForm' })(formOfStepZero);



class FormOfStepOne extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            isSuccess:true,
        }
    }

    handleSubmitStepOne = e =>{
        const {dispatch,changeCurrent} = this.props
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values) => {
            if (!err) {
                // dispatch(receiveInfo(values['type'], values['id'],
                //     () => {
                //         this.setState({
                //             received: true
                //         })//todo  isReceived can replaced?   必须要一个放values
                //         //todo response  try setsession
                //     }
                // ))// do with DB;
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
                <Descriptions.Item label="UserName">{values[0]}</Descriptions.Item>
                <Descriptions.Item label="Telephone">{values[1]}</Descriptions.Item>
                <Descriptions.Item label="Live">{values[2]}</Descriptions.Item>
                <Descriptions.Item label="Remark">{values[3]}</Descriptions.Item>
                <Descriptions.Item label="Address">{values[4]}</Descriptions.Item>
            </Descriptions>
        )
    }

    render(){
        const {isSuccess} = this.state
        return (
            <div>
            {isSuccess?this.handleReceiveInfo([1,2,3,4,5]):null}
            <Button onClick={this.handleOnClick}>
                next
            </Button>
            </div>
        )
    }
}


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
                uid: '',
                name: '',
                status: '',
                url: '',
            },
        ],
        fileListName:[]
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

    handleChange = ({ fileList }) => {
        if(fileList){
            if (fileList[0]["response"]) {
                const name = fileList[0]["response"].data.code
                console.log(fileList[0]["response"].data)
                console.log(fileList[0]["response"].data.code)
                this.setState({fileListName:[...this.state.fileListName,name]})
            }
        }

    console.log(this.state.fileListName)
    }


    beforeUpload = (file)=>{
        const isLt2M = file.size / 1024 / 1024 < 4;
        if (!isLt2M) {
            message.error('Image must smaller than 4MB!');
        }
        return isLt2M;
    }

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
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    name="paperFiles"
                    multiple={true}
                    beforeUpload={this.beforeUpload}
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
            title: 'upload',
            content: <FormOfStepThird/>,
            icon:<Icon type="upload" />
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
