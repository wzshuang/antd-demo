import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Table, Divider, Select, DatePicker } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

class Home extends Component {
	state = {
		data: [],
		currentTime: new Date(),
		loading: false,
		addItem: false
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
		this.setState({
			addItem: true
		})
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
		if(this.state.addItem) {
			return <Redirect to="/itemAdd"/>
		} 
		return (
			<div>
				<Form>
					<Row>
						<Button type="primary" onClick={this.getDataSource}>查询</Button>
						<Button onClick={this.addItem}>新增</Button>
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