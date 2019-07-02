import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

export const RHeaderText =()=> {
    return(
        <div className='register-slogan'>
        欢迎来到注册界面
        </div>
    );
}

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
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

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;

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
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 36,
                    offset: 6,
                },
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

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <div>
                <p className='p-font'>
                    <Icon type="usergroup-add" style={{marginRight:"10px"}}/>
                    Let's get started!
                </p>

            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{marginBottom:"-15px"}}>
                <Form.Item style={{width:"125%"}}>
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
                    })(<Input prefix={<Icon type="mail" />}
                              style={{color: 'rgba(0,0,0,.25)'}}
                              placeholder="Email"/>)}
                </Form.Item>
                <Form.Item hasFeedback style={{width:"125%"}}>
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
                <Form.Item hasFeedback style={{width:"125%"}}>
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
                        prefix={<Icon type="lock" />}
                        type="password"
                        placeholder="Confirm"
                        onBlur={this.handleConfirmBlur}/>)}
                </Form.Item>
                <Form.Item style={{width:"125%"}}>
                    {getFieldDecorator('nickname', {
                        rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                    })(<Input prefix={<Icon type="user" />}
                                placeholder="your nickname"/>)}
                </Form.Item>

                <Form.Item style={{width:"125%"}}>
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(<Input
                        prefix={<Icon type="phone"/>}
                        placeholder="Phone Number"
                        addonBefore={prefixSelector}
                        style={{width: '100%'}}/>)}
                </Form.Item>

                <Form.Item style={{width:"125%"}} >
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{required: true, message: 'Please input the captcha you got!'}],
                            })(<Input prefix={<Icon type="message" />} style={{float:"left"}}/>)}
                        </Col>
                        <Col span={12}>
                            <Button style={{float:"right"}}>Get captcha</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item {...tailFormItemLayout} style={{width:"120%", float:"right"}} >
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox style={{float:"left", marginTop:"-15px"}}>
                            I have read the <a href="">agreement</a>
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout} >
                    <Button type="primary" htmlType="submit" style={{display: "inline-block"}}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);

export default WrappedRegistrationForm;
