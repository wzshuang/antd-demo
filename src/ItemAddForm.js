import React from 'react';
import { Form, Modal, Input} from 'antd'

const FormItem = Form.Item;

const WrappedForm = (props) => {
	const { visible, onCancel, onOk, form } = props;
	const { getFieldDecorator } = form;
	return (
		<Modal visible={visible} title="新增" cancelText="取消" okText="确定" onCancel={onCancel} onOk={onOk}>
			<Form>
				<FormItem label="姓名">
					{getFieldDecorator('name', {rules: [{required: true}]})(<Input />)}
				</FormItem>
				<FormItem label="年龄">
					{getFieldDecorator('age', {rules: [{required: true}]})(<Input />)}
				</FormItem>
				<FormItem label="地址">
					{getFieldDecorator('address', {rules: [{required: true}]})(<Input />)}
				</FormItem>
			</Form>
		</Modal>
	)
}

const ItemAddForm = Form.create()(WrappedForm)

export default ItemAddForm;