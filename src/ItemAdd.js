import React, { Component } from 'react';
import { Carousel } from 'antd'

class ItemAdd extends Component {
	render() {
		console.log(this.props);
		return (
			<Carousel autoplay>
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
			</Carousel>
		)
	}
}

export default ItemAdd;