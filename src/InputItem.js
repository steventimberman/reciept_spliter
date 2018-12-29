import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';


class InputItem extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	      price: 0,
	    };
	    this.handleUpdate  = this.handleChange.bind(this);
	    this.setState  = this.setState.bind(this);
	  }

	handleChange(val) {
		this.setState({price: val});
	}
	
	render() {
		let { state, itemAddHandler } = this.props;
		const buttonStyle = {
			margin: '19px'
		};

		return (
			<div><form >
				<TextField
					name='item'
					type="number"
					value={this.state.price}
					onChange={(e) => this.handleChange(e.target.value)}
					label="Item Listed Price"
					InputProps={{
			            startAdornment: <InputAdornment position="start">$</InputAdornment>,
			          }}
				/>
				<Button color="default" style={buttonStyle} onClick={(e) => itemAddHandler(state.items, this.state.price)}>
					Add Item
				</Button>
				</form>
			</div>
			)
	}

}

export default InputItem;