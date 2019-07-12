import React from 'react';
import { Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Button,} from "antd";
import {connect} from "react-redux";
import Spin from "antd/es/spin";
import {getGraphData} from "../../../actions/fetchDataAction";
import {Redirect} from "react-router";
import {submitData} from "../../../actions/submitDataAction";

const { Option } = Select;
const { TextArea } = Input;



class updateInfoForm extends React.Component {
    state = {
        confirmDirty: false,
        responseData:[]
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const {dispatch} = this.props
                dispatch(submitData("updateInfo",values['email'],values['phone'],values['nickname'],values['password']))
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    componentWillMount(): void {
        const {dispatch} = this.props
        dispatch(getGraphData("infoData",
            (msg)=>{
            this.setState({responseData:msg})
        }))
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="10">+10</Option>
            </Select>,
        );

        const {isFetching, isFetched,isSubmitting,isSubmitted} = this.props
        const {responseData} = this.state

        return (
            <div>
                {isSubmitted?<Redirect to='/user'/>:null}
                <Spin spinning={isFetching||isSubmitting}>
                    {isFetched ? (<Form onSubmit={this.handleSubmit}>
                        <Form.Item label="邮箱">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: false,
                                    },
                                ],initialValue: responseData["email"]})(<Input/>)}
                        </Form.Item>
                        <Form.Item label="电话号码">
                            {getFieldDecorator('phone', {
                                rules: [{required: false}],
                                initialValue:responseData["phone"],
                            })(<Input addonBefore={prefixSelector}
                                      style={{width: '100%'}}
                            />)}
                        </Form.Item>
                        <Form.Item
                            label={<span>名称&nbsp;
                                <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o"/>
                            </Tooltip>
                        </span>}>
                            {getFieldDecorator('nickname', {
                                rules: [{required: false, whitespace: true}],
                                initialValue:responseData["nickName"]
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item
                            label="个人简介">
                            {getFieldDecorator('introduce', {
                                rules: [{required: false, whitespace: true}],
                            })(<TextArea rows={3}/>)}
                        </Form.Item>
                        <Form.Item label="密码" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: false,
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password/>)}
                        </Form.Item>
                        <Form.Item label="确认密码" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>) : null}
                </Spin>
            </div>
        );
    }
}

const updateForm = Form.create({ name: 'register' })(updateInfoForm);

function mapStateToProps(state){
    const { isFetching, isFetched,  } = state.transport
    const {isSubmitting,isSubmitted,isFailure} = state.submitFormData
    return { isFetching, isFetched,isSubmitting,isSubmitted,isFailure }
}

const UpdateInfoForm = connect(mapStateToProps)(updateForm)

export default UpdateInfoForm;
