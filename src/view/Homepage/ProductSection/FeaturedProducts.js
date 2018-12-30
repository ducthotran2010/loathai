import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Product from './Product';

class FeaturedProducts extends Component {
  render() {
    const { featuredProducts } = this.props;
    return (
      <Grid
        container
        direction="row" 
        alignItems="center"
        style={{ marginTop: '20px' }}
      >
        {featuredProducts.map((i) => (
          <Product key={i.name} product={i} />
        ))}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    featuredProducts: state.homepage.featuredProducts,
  };
}
  
export default connect(mapStateToProps)(FeaturedProducts);
