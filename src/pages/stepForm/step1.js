import React from 'react';
import 'antd/dist/antd.css';
import {Form, Icon, Input, DatePicker} from 'antd';

const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

class NormalLoginForm extends React.Component {
    state = {
        IdCardDirty:false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleName = (rule,value,callback)=> {
        if(value.length<2){
            callback("Please input your REAL NAME")
        }

    }

    handleOnBlur = (e)=>{
        const {value} = e.target;
        this.setState({IdCardDirty:this.state.IdCardDirty||!!value})
    }

    handleValidate = (rule,value,callback) =>{
        const regex = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
        if(!value||!value.match(regex))
        {
            callback("It is not a correct idcard number");
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('Name', {
                        rules: [{ required: true, message: 'Please input your real name!' },
                            {validate:this.handleName},],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Real Name"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('IdCard', {
                        rules: [
                            { required: true, message: 'Please input the number of your Id Card!' },
                            { validator:this.handleValidate, }],
                    })(
                        <Input
                            prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="IdCard"
                            onBlur={this.handleOnBlur}
                        />,
                    )}
                </Form.Item>
                <Form.Item label="DatePicker">
                    {/*//todo 预处理日期*/}
                    {getFieldDecorator('date-picker', config)(<DatePicker />)}
                </Form.Item>
            </Form>
        );
    }
}

const Step1 = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Step1;

