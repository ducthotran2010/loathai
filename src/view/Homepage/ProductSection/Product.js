/* eslint-disable import/no-unresolved */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import { ProductGrid } from 'component/Homepage/ProductContainer';

const Product = (props) => (
  <ProductGrid xs={4} sm={3} md={2} item >
    <img width="100%" src={props.product.picture} alt={props.product.name} />
    <Typography variant="subtitle2" gutterBottom>
      {props.product.name} <br />
      <NumberFormat
        value={props.product.price}
        displayType='text'
        thousandSeparator='.'
        decimalSeparator=','
        suffix='₫'
        renderText={value => <font color="red">{value}</font>}
      />
    </Typography>
    <Typography variant="body1">
      {props.product.note}
    </Typography>
  </ProductGrid>
);

export default Product;
