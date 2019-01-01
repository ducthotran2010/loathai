/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TotalContainer } from 'component/Cart/index';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import OrderButton from 'component/Cart/OrderButton';

const DIV = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 16px;
`;

const ContainButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class TotalSection extends Component {
  render() {
    const total = this.props.cart.reduce((res, current) => res + (current.quantity * current.price), 0);
    return (
      <TotalContainer container direction="column">
        <DIV>
          <Typography variant="subtitle1">
                Thành tiền:
          </Typography>
          <Typography variant="h5" style={{ marginBottom: 16, fontWeight: 400, textAlign: 'right' }}>
            <NumberFormat
              value={total}
              displayType='text'
              thousandSeparator='.'
              decimalSeparator=','
              suffix='₫'
              renderText={value => <font color="#fe3834">{value}</font>}
            />
          </Typography>
        </DIV>
        <ContainButton>
          <OrderButton />
        </ContainButton>
      </TotalContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(
  mapStateToProps,
)(TotalSection);
