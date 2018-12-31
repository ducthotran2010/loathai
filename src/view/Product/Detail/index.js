/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import ProductHeader from './ProductHeader';
import ProductFeature from './ProductFeature';
import ProductPrice from './ProductPrice';
import AddToCartSection from './AddToCartSection';
import Contact from './Contact';

const DIV = styled.div`
    padding: 10px 24px 10px 24px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class Detail extends Component {
  render() {
    return (
      <div>
        <ProductHeader />
        <Divider style={{ height: '3px', backgroundColor: '#f0f0f0' }} />
        <Grid container>
          <DIV>
            <div>
              <ProductPrice />
              <AddToCartSection />
            </div>
          </DIV>
          <Contact />
        </Grid>
        <ProductFeature />
      </div>
    );
  }
}

export default Detail;
