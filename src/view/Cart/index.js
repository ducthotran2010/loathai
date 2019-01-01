/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ProductSection from './ProductSection';
import TotalSection from './TotalSection';

class Homepage extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Typography variant="h6" style={{ marginBottom: 8, paddingLeft: 8 }}>
            GIỎ HÀNG
        </Typography>
        <Grid container justify="center" alignItems="flex-start">
          <ProductSection />
          <TotalSection />
        </Grid>
      </Grid>
    );
  }
}
 
export default Homepage;
