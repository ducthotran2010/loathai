/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Container, ImgDiv, ContentDiv } from 'component/Cart/Product';
import ProductHeader from './Header';
import ProductPrice from './Price';
import ProductQuantity from './Quantity';

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <Container item>
        <ImgDiv>
          <img alt={product.name} src={product.picture} width="100%" />
        </ImgDiv>
        <ContentDiv container spacing={16}>
          <ProductHeader name={product.name} />
          <ProductPrice price={product.price} truePrice={product.truePrice} />
          <ProductQuantity quantity={product.quantity} />
        </ContentDiv>
      </Container>
    );
  }
}

export default Product;
