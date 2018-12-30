/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ProductCarousel from './Carousel';
import ProductModal from './Modal';

class Product extends Component {
    state = {
      isModalOpened: false,
      modalIndex: -1,
    };

    openModal = (index) => {
      this.setState({ 
        isModalOpened: true,
        modalIndex: index, 
      });
    }
  
    closeModal = () => {
      this.setState({ 
        isModalOpened: false,
        modalIndex: -1,
      });
    }

    render() {
      return (
        <Grid container direction="column">
          <ProductModal state={this.state} closeModal={this.closeModal} />
          <Grid container>
            <Grid item md={5} xs={12} style={{ borderRight: '1px solid white' }}>
              <ProductCarousel isModalOpened={this.state.isModalOpened} openModal={this.openModal} />
            </Grid>
            <Grid item md={7}>
            Detail...
            </Grid>
          </Grid>
          <div>some ecece</div>
        </Grid>
      );
    }
}

export default Product;
