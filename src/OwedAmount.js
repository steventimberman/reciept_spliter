import React, { Component } from 'react';
import calculateOwedAmount from './calculateOwedAmount'
import Paper from '@material-ui/core/Paper';

class OwedAmount extends Component {

	render () {
		const { state } = this.props;



		if (state.subtotal && state.total && state.tip && state.items.length > 0) {
			var total = 0
			var sum = state.items.map((item) => (total += Number(item)))
			console.log(total)
			var owed = calculateOwedAmount(state.subtotal, state.total, state.tip, total);
			return (<Paper>You owe ${owed}</Paper>)
		}else {return <Paper>Please enter information about your check!</Paper>}
	}

}

export default OwedAmount;