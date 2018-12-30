/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { ProductContainer } from 'component/Homepage';
import CategoryGroup from './CategoryGroup';
import FeaturedProducts from './FeaturedProducts';

class ProductSection extends Component {
  render() {
    return (
      <ProductContainer>
        <img alt="" width="300" className="imgbutton" src="https://cdn.tgdd.vn/dmx2016/Content/images/home2019/titleGiasocquangon-noel.png" />
        <CategoryGroup />
        <FeaturedProducts />
      </ProductContainer>
    );
  }
}

export default ProductSection;
