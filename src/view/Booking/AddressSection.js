/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import OrderButton from 'component/Booking/OrderButton';
import { AddressContainer, Header } from 'component/Booking/index';

class TotalSection extends Component {
  render() {
    return (
      <AddressContainer item xs={12} md={6}>
        <Typography variant="subtitle1" component={Header} >
            THÔNG TIN KHÁCH HÀNG
        </Typography>
        <Grid container>
          <Grid item xs={6} style={{ paddingRight: 10 }}>
            <TextField
              id="outlined-name"
              label="Họ và tên"
              name="Customer.Name"
              autoComplete="name"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-phone"
              label="Số điện thoại"
              name="Customer.Phone"
              autoComplete="tel"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-address"
              label="Địa chỉ"
              name="Customer.Address"
              margin="normal"
              variant="outlined"
              fullWidth
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-note"
              label="Ghi chú"
              name="Customer.Not"
              margin="normal"
              variant="outlined"
              fullWidth
              multiline
            />
          </Grid>
          <Grid container xs={12} justify="center">
            <OrderButton />
          </Grid>
        </Grid>
      </AddressContainer>
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
