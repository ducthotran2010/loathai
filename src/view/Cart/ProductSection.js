/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductContainer } from 'component/Cart/index';
import Product from './Product/index';

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

class ProductSection extends Component {
  render() {
    return (
      <ProductContainer container direction="column">
        {this.props.cart.map(i => 
          <Product key={i.name} product={i} />
        )}
      </ProductContainer>
    );
  }
}

export default connect(
  mapStateToProps,
)(ProductSection);
