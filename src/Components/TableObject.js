import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Paper from '@material-ui/core/Paper';
import calculateTaxTip from "../Logic/calculateTaxTip"
import calculateOwedAmount from "../Logic/calculateOwedAmount"
import calculateTotal from "../Logic/calculateTotal"
import Typography from '@material-ui/core/Typography';


class TableObject extends Component {

	render () {

		var { state } = this.props;

		var taxPercent = (state.subtotal == 0 && state.total == 0) ? 0 : ((state.total - state.subtotal) / state.subtotal)*100

		return (
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Item Number</TableCell>
							<TableCell align="right">Subtotal</TableCell>
							<TableCell align="right">Tax</TableCell>
							<TableCell align="right">Tip</TableCell>
							<TableCell align="right">Total</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{state.items.map((item, id) => (
							<TableRow key={id + 1}>
								<TableCell>{id + 1}</TableCell>
								<TableCell align="right">{item}</TableCell>
								<TableCell align="right">{Number(calculateTaxTip(taxPercent, item)).toFixed(2)}</TableCell>
								<TableCell align="right">{Number(calculateTaxTip(state.tip, item)).toFixed(2)}</TableCell>
								<TableCell align="right">{calculateTotal(item, taxPercent, state.tip)}</TableCell>
							</TableRow>
							)
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell>Total Amount Due</TableCell>
							<TableCell align="right"><Typography color="primary">{Number(state.itemsTotal).toFixed(2)}</Typography></TableCell>
							<TableCell align="right"><Typography color="primary">{Number(calculateTaxTip(taxPercent, state.itemsTotal)).toFixed(2)}</Typography></TableCell>
							<TableCell align="right"><Typography color="primary">{Number(calculateTaxTip(state.tip, state.itemsTotal)).toFixed(2)}</Typography></TableCell>
							<TableCell align="right"><Typography variant="h6" color="primary">{(state.itemsTotal == 0) ? 0 : calculateOwedAmount(state.subtotal, state.total, state.tip, state.itemsTotal)}</Typography></TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</Paper>
		)

	}
	
} 

export default TableObject;