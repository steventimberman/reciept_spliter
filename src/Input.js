import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReceiptSpecs from './ReceiptSpecs'
import InputItem from './InputItem'
import Typography from '@material-ui/core/Typography';



class Inputs extends Component {


	
	render(){
		var { state, updateHandler, itemAddHandler } = this.props;

		return (
			<Grid container spacing={16}>
				<Grid item xs={12}>
					<Grid container justify="center" spacing={16}>
						<Typography varient='h2' align='left'>Check Information</Typography>
						<Grid item xs={12}>
				          <Paper>
				          	<form>
				          		<ReceiptSpecs updateHandler={updateHandler} state={state}/>				
				          	</form>
				          </Paper>
				        </Grid>
				        <Typography varient='h2' align='left'>Individual item information</Typography>
			          	<Grid item xs={12}>
				          <Paper>
				          	
				          	<InputItem itemAddHandler={itemAddHandler} state={state}/>				
				          	
				          </Paper>
				        </Grid>				 
			        </Grid>
		        </Grid>
			</Grid>
		)
	}
}

export default Inputs;