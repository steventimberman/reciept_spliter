import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class Header extends Component {
  
  render(){
    return (
    <div className="Header">
        <Grid container spacing={16}>
        <Grid item xs={12}>
         <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Receipts
                </Typography>
            </Toolbar>
        </AppBar>
        </Grid>
        </Grid>
    </div>
    )
  }

  
}

export default Header;