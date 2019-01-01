/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { CarouselContainer } from 'component/Product';
import ProductCarousel from './Carousel';
import ProductModal from './Modal';
import ProductDetail from './Detail/index';
import ProductInformation from './Information';
import ProductContent from './Content';

class Product extends Component {
    state = {
      isModalOpened: false,
      modalIndex: -1,
    };

    componentDidMount() {
      document.title = `Sản phẩm | ${document.location.hostname}`;
    }

    openModal = (index) => {
      this.setState({ 
        isModalOpened: true,
        modalIndex: index, 
      });
      document.getElementById('theme-color').content = '#fff';
    }
  
    closeModal = () => {
      this.setState({ 
        isModalOpened: false,
        modalIndex: -1,
      });
      document.getElementById('theme-color').content = '#4a90e2';
    }

    render() {
      return (
        <Grid container direction="column">
          <ProductModal state={this.state} closeModal={this.closeModal} />
          <Grid container style={{ backgroundColor: 'white' }}>
            <CarouselContainer item md={6} xs={12}>
              <ProductCarousel isModalOpened={this.state.isModalOpened} openModal={this.openModal} />
            </CarouselContainer>
            <Grid item md={6} xs={12}>
              <ProductDetail />
            </Grid>
          </Grid>
          <ProductInformation />
          <ProductContent />
        </Grid>
      );
    }
}

export default Product;
