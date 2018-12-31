/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

class ProductPrice extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Typography variant="h6">
          <NumberFormat
            value={product.price}
            displayType='text'
            thousandSeparator='.'
            decimalSeparator=','
            suffix='₫'
            renderText={value => <span style={{ color: '#ff3425' }}>{value}</span>}
          />
        </Typography>
        {product.truePrice && <Typography style={{ color: '#777' }}>
            Giá gốc: 
          <NumberFormat
            value={product.truePrice}
            displayType='text'
            thousandSeparator='.'
            decimalSeparator=','
            prefix=' '
            suffix='₫'
            renderText={value => <strike>{value}</strike>}
          />
          <br />
            Tiết kiệm: 
          <NumberFormat
            value={product.truePrice - product.price}
            displayType='text'
            thousandSeparator='.'
            decimalSeparator=','
            prefix=' '
            suffix='₫'
            renderText={value => <span style={{ color: '#ff3425' }}>{value}</span>}
          />
        </Typography>
        }
      </div>
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
)(ProductPrice);
  
