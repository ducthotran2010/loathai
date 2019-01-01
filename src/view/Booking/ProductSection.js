/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import NumberFormat from 'react-number-format';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { OrderContainer, StyledTableCell, NormalTableCell, 
  Header, Quantity, Name } from 'component/Booking/index';

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

class ProductSection extends Component {
  render() {
    const total = this.props.cart.reduce((res, current) => res + (current.quantity * current.price), 0);
    return (
      <OrderContainer item xs={12} md={6}>
        <Typography variant="subtitle1" component={Header} >
            THÔNG TIN ĐƠN HÀNG
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Số lượng & Sản phẩm</StyledTableCell>
              <StyledTableCell align="center">Thành tiền</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.cart.map(product => (
              <TableRow hover key={product.name}>
                <NormalTableCell component={Link} to="product">
                  <Quantity>{product.quantity} x </Quantity>
                  <Name>{product.name}</Name>
                </NormalTableCell>
                <NormalTableCell align="center">
                  <NumberFormat
                    value={product.price * product.quantity}
                    displayType='text'
                    thousandSeparator='.'
                    decimalSeparator=','
                    suffix='₫'
                    renderText={value => value}
                  />
                </NormalTableCell>
              </TableRow>
            ))}
            <TableRow>
              <StyledTableCell align="right">Tổng tiền</StyledTableCell>
              <StyledTableCell align="center">
                <NumberFormat
                  value={total}
                  displayType='text'
                  thousandSeparator='.'
                  decimalSeparator=','
                  suffix='₫'
                  renderText={value => value}
                />
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table> 
      </OrderContainer>
    );
  }
}

export default connect(
  mapStateToProps,
)(ProductSection);

