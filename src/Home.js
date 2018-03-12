import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Table, Divider, Select, DatePicker, Modal } from 'antd';
import moment from 'moment';
import ItemAddForm from './ItemAddForm';


const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

class Home extends Component {
	state = {
		data: [],
		currentTime: new Date(),
		loading: false,
		addItemModalVisible: false
	}

	componentDidMount() {
		this.getDataSource();
	}

	getFields = () => {
		const children = [];
		const { getFieldDecorator } = this.props.form;
		for(let i=0; i < 10; i++) {
			children.push(
				<Col span={6} key={i}>
					<FormItem label={`Field-${i}`} style={{ display:'flex' }}>
						{
							getFieldDecorator(`field-${i}`)(
								<Input placeholder="placeholder"/>
							)
						}
					</FormItem>
				</Col>
			)
		}
		children.push(
			<Col span={6} key={100}>
				<Select defaultValue="lucy" style={{ width: 120 }} allowClear placeholder="--请选择--" onChange={this.handleSelectChange}>
			      <Option value="jack">Jack</Option>
			      <Option value="lucy">Lucy</Option>
			      <Option value="disabled" disabled>Disabled</Option>
			      <Option value="Yiminghe">yiminghe</Option>
			    </Select>
		    </Col>
		)
		children.push(
			<Col span={6} key={101}>
				<RangePicker onChange={this.handleRangePickerChange} defaultValue={[moment(this.state.currentTime, 'yyyy-MM-dd')]}/>
			</Col>
		)
		return children;
	}

	handleSelectChange  = (value, option) => {
		console.log(value, option);
	}

	handleRangePickerChange = (date, dateStr) => {
		console.log(date, dateStr);
	}

	addItem = () => {
		//this.props.history.push('/itemAdd?id=3');
		this.setState({
			addItemModalVisible: true
		})
	}

	cancelAddItem = () => {
		this.setState({
			addItemModalVisible: false
		})
	}
	confirmAddItem = () => {
		this.setState({
			addItemModalVisible: false
		})
		const form = this.form;
		form.validateFields((err, values) => {
			if(err) return;
			form.resetFields();
			this.setState({
				addItemModalVisible: false
			})
		})
	}
	saveFormRef = (form) => {
		this.form = form
	}

	getDataSource = () => {
		this.setState({
			loading: true
		})
		setTimeout(()=>{
			console.log("setTimeout.....");
			this.setState({
				loading: false,
				data: [{
				  key: '1',
				  name: '胡彦斌', 
				  age: 32,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '2',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '3',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '4',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '5',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '6',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '7',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '8',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '9',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园1号'
				}, {
				  key: '10',
				  name: '胡彦祖',
				  age: 42,
				  address: '西湖区湖底公园12号'
				}]
			})
		}, 1000)
	}

	getColumns() {
		return [{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: '住址',
		  dataIndex: 'address',
		  key: 'address',
		}];
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<Form>
					<Row>
						<Button type="primary" onClick={this.getDataSource}>查询</Button>
						<Button onClick={this.addItem}>新增</Button>
						<ItemAddForm 
							ref={this.saveFormRef}
							visible={this.state.addItemModalVisible} 
							onCancel={this.cancelAddItem}
							onOk={this.confirmAddItem}
							/>
					</Row>
					<Row gutter={ 24 }>{ this.getFields() }</Row>
				</Form>

				<Divider />

				<Table loading={this.state.loading} dataSource={this.state.data} columns={this.getColumns()} />
			</div>
		)
	}
}

const WrappedHome = Form.create()(Home);

export default WrappedHome;