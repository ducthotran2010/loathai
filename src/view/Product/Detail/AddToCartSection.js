/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { QuantityField, AddToCardButton, BuyNowButton } from 'component/Product/Detail';

class AddToCart extends Component {
    state = {
      amount: 1,
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
        <div style={{ marginTop: 15 }}>
          <QuantityField 
            toDefault={this.toDefault}
            handleChange={this.handleChange}
            add={this.add}
            remove={this.remove}
            amount={this.state.amount}
          />
          <BuyNowButton />
          <br />
          <AddToCardButton />
        </div>
      );
    }
}

export default AddToCart;
