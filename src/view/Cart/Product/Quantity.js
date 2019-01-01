/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { QuantityField } from 'component/Product/Detail';

class AddToCart extends Component {
    state = {
      amount: this.props.quantity,
    };
    
    add = () => {
      this.setState(state => ({
        amount: state.amount + 1,
      }));
    }

    remove = () => {
      this.setState(state => ({
        amount: state.amount - 1,
      }));
    }
    
    handleChange = event => {
      this.setState({
        amount: Number(event.target.value) || 0,
      });
    }

    toDefault = () => {
      this.setState(state => ({
        amount: state.amount < 1 ? 1 : state.amount,
      }));
    }

    render() {
      return (
        <Grid item xs={12} sm={4}>
          <QuantityField 
            toDefault={this.toDefault}
            handleChange={this.handleChange}
            add={this.add}
            remove={this.remove}
            amount={this.state.amount}
          />
        </Grid>
      );
    }
}

export default AddToCart;
