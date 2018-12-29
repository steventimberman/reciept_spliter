import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Inputs from './Input'
import updateStateObj from './updateState'
import Grid from '@material-ui/core/Grid';
import OwedAmount from './OwedAmount'
import addItems from './addItems'
import ItemsList from './ItemsList'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subtotal: 0,
      total: 0,
      tip: 20,
      items: [],
    };
    this.handleUpdate  = this.handleUpdate.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleUpdate (section, value) {
   
    this.setState(updateStateObj(section, value));

  }

  handleItemAdd (items, price) {

    this.setState(addItems(items, price))

  }

  

  render() {
    console.log("HI THEREEEE")
    return (
      <div className="App">
        <Grid container spacing={16}><Grid item xs={12}><Header/></Grid></Grid>
        <Grid container spacing={16}><Grid item xs={12}><Inputs updateHandler={this.handleUpdate} itemAddHandler={this.handleItemAdd} state={this.state}/></Grid></Grid>
        <Grid container spacing={16}><Grid item xs={12}><ItemsList items={this.state.items}/></Grid></Grid>
        <Grid container spacing={16} justify="center"><Grid item xs={4}><OwedAmount state={this.state}/></Grid></Grid>
      </div>
    );
  }
}

export default App;
