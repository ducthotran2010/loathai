/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { CarouselContainer, ArticleContainer } from 'component/Homepage';
import TopArticle from './TopArticle';
import ProductSection from './ProductSection';
import HomepageCarousel from './Carousel';

class Homepage extends Component {
  componentDidMount() {
    document.title = `Trang chủ LOATHAI | ${document.location.hostname}`;
  }
  render() {
    return (
      <Grid container>
        <Grid container>
          <CarouselContainer item md={8} xs={12}>
            <HomepageCarousel />
          </CarouselContainer>
          <ArticleContainer item md={4}>
            <TopArticle />
          </ArticleContainer>
        </Grid>
        <ProductSection />
      </Grid>
    );
  }
}
 
export default Homepage;
