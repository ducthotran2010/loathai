/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ProductSection from './ProductSection';
import AddressSection from './AddressSection';

class Homepage extends Component {
  componentDidMount() {
    document.title = `Đặt hàng | ${document.location.hostname}`;
  }
  render() {
    return (
      <Grid container direction="column">
        <Grid container alignItems='flex-start'>
          <ProductSection />
          <AddressSection />
        </Grid>
      </Grid>
    );
  }
}
 
export default Homepage;
