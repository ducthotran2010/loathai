/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { DIV } from 'component/Product/Detail';

class ProductHeader extends Component {
  render() {
    const { product } = this.props;
    return (
      <DIV>
        <Typography variant="h5" style={{ paddingBottom: 8 }}>
          {product.name}
        </Typography>
        <Typography>
            Thương hiệu: {product.trademark.name} Code: {product.code} 
        </Typography>
      </DIV>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
  };
}
  
export default connect(
  mapStateToProps,
)(ProductHeader);
  
