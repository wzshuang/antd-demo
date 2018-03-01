import React, { Component } from 'react';
import { Form, Icon, Input, Alert, Button, Checkbox, Modal, message } from 'antd';
import { Link, Redirect } from 'react-router-dom';

const FormItem = Form.Item;

class LoginForm extends Component {
	state = {
		notice: '',
		loading: false,
		loginSuccess: false
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				console.log("Form is valid, values: ", values);
				this.setState({
					loading: true
				})
				setTimeout(() => {
					this.setState({
						loading: false
					})
					if(values.username == "007@00000" && values.password == "123456") {
						// Modal.success({
						//     title: '提示',
						//     content: values.username + ' 登录成功',
						//     onOk: () => {
						//     }
						// });
						this.setState({
							loginSuccess: true
						})
					} else {
						this.setState({
							notice: '用户名或密码不正确'
						});
					}
				}, 1000);
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		if(this.state.loginSuccess) {
			return <Redirect to='/home' />;
		}

		return (
			<Form className="login-form" onSubmit={this.handleSubmit}>
				{
					this.state.notice &&
					<Alert style={{ marginBottom: 24 }} message="用户名或密码不正确" type="error" showIcon="true"/>
				}
				<FormItem>
					{getFieldDecorator('username', {
						rules: [{required: true, message: '请输入用户名'}]
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"/>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{required: true, message: '请输入密码'}]
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码"/>
					)}
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading}>登录</Button>
				</FormItem>
			</Form>
		)
	}
}

const WrappedLoginForm = Form.create()(LoginForm)

export default WrappedLoginForm;