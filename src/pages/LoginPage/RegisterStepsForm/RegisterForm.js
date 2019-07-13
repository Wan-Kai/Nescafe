import React from 'react';
import 'antd/dist/antd.css';
import '../Forms.css';
import {
    Form,
    Input,
    Icon,
    Select,
    Button, message, Upload, Modal,
} from 'antd';
import QueueAnim from "rc-queue-anim";
import Spin from "antd/es/spin";

const {Option} = Select;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


class formOfStepTwo extends React.Component {

    state = {
        previewVisible: false,
        confirmDirty: false,
        waitRegister:false,

        previewImage: '',
        fileList: [
            {
                uid: '',
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

    handleRegister = (msg) =>{
        this.setState({
            waitRegister:msg,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {changeCurrent} = this.props
        const {fileList,} = this.state
        let i,fileListName = ''
        for(i = 0;i<fileList.length;i++){
            if(fileList[i]["response"]){
                fileListName += fileList[i]["response"].data.code
            }
        }

        this.props.form.setFieldsValue({fileListName:fileListName})

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                changeCurrent(3);
            }
        });
    };

    handleChange = ({ file,fileList }) => {
        this.setState({ fileList });
        this.setState({waitRegister:true})
        if(file.status !== 'uploading'){
            this.handleRegister(false)
        }

    }

    beforeUpload = (file)=>{
        const isLt2M = file.size / 1024 / 1024 < 4;
        if (!isLt2M) {
            message.error('Image must smaller than 4MB!');
        }
        return isLt2M;
    }


    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
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

    render() {
        const {getFieldDecorator} = this.props.form;
        const {previewVisible, previewImage, fileList,waitRegister} = this.state;

        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 36},
                sm: {span: 16},
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="10">+10</Option>
            </Select>,
        );

        return (
            <QueueAnim delay={100} component="div" type="left">
                <div className='register-form' key='0'>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{marginBottom: "-15px"}}>
                        <Form.Item style={{width: "125%"}}>
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input prefix={<Icon type="mail"/>}
                                      style={{color: 'rgba(0,0,0,.25)'}}
                                      placeholder="Email"/>)}
                        </Form.Item>
                        <Form.Item style={{width: "125%"}}>
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ],
                            })(<Input prefix={<Icon type="user"/>}
                                      style={{color: 'rgba(0,0,0,.25)'}}
                                      placeholder="User"/>)}
                        </Form.Item>
                        <Form.Item hasFeedback style={{width: "125%"}}>
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
                        <Form.Item hasFeedback style={{width: "125%"}}>
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
                        <Form.Item style={{width: "125%"}}>
                            {getFieldDecorator('nickname', {
                                rules: [{required: false, message: 'Please input your nickname!', whitespace: true}],
                            })(<Input prefix={<Icon type="info"/>}
                                      placeholder="your nickname"/>)}
                        </Form.Item>

                        <Form.Item style={{width: "125%"}}>
                            {getFieldDecorator('phone', {
                                rules: [{required: false, message: 'Please input your phone number!'}],
                            })(<Input
                                prefix={<Icon type="phone"/>}
                                placeholder="Phone Number"
                                addonBefore={prefixSelector}
                                style={{width: '100%'}}/>)}
                        </Form.Item>
                        <div>
                            <Upload
                                action="https://scf.intellizhi.cn/user/paperUpload"
                                listType="picture-card"
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                                name="paperFiles"
                                beforeUpload={this.beforeUpload}
                            >
                                {fileList.length >= 4 ? null : uploadButton}
                            </Upload>

                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{width: '100%'}} src={previewImage}/>
                            </Modal>
                        </div>

                        <Form.Item style={{textAlign: "center", marginTop: "-2em"}}>
                            <Spin spinning={waitRegister}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Spin>
                        </Form.Item>
                    </Form>
                </div>
            </QueueAnim>
        );
    }
}

const FormOfStepTwo = Form.create({name: 'Register'})(formOfStepTwo);

export default FormOfStepTwo
