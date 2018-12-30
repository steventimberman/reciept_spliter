import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


class ReceiptSpecs extends Component {
	

	render() {
		var { state } = this.props;
		return (
			<div>
				<Typography variant="subtitle1">Check Information</Typography>
				<TextField
					name="subtotal"
					type="number"
					placeholder="0"
					onChange={(e) => this.props.updateHandler(e.target.name, e.target.value)}
					label="Subtotal"
					value={state.subtotal}
					InputProps={{
			            startAdornment: <InputAdornment position="start">$</InputAdornment>,
			          }}
				/>
				<TextField
					name='total'
					type="number"
					placeholder="0"
					onChange={(e) => this.props.updateHandler(e.target.name, e.target.value)}
					label="Total"
					value={state.total}
					InputProps={{
			            startAdornment: <InputAdornment position="start">$</InputAdornment>,
			          }}
				/>
				<TextField
					name='tip'
					type="number"
					label="Tip Percent (%)"
					onChange={(e) => this.props.updateHandler(e.target.name, e.target.value)}
					value={state.tip}

				/>
			</div>
		)
	}
}

export default ReceiptSpecs;