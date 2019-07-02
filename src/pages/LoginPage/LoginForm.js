import React from 'react';
import 'antd/dist/antd.css';
import './Forms.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class loginForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of LoginPage: ', values);
            }
        });
    };

    render() {
        const {handleRegister} = this.props.handleRegister;
        const {getFieldDecorator} = this.props.form;
        return(<div>
                <div className='slogan'>
                    LOGIN IN <Icon type="key"/>
                </div>
                <Form onSubmit={this.handleSubmit} className='login-form'>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {/*调整rememberme的大小 todo*/}
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox className='checkbox'>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a onClick={()=>handleRegister(true)} style={{fontSize: '20px'}}>register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const LoginForm = Form.create({ name: 'normal_login' })(loginForm);

export default LoginForm ;
