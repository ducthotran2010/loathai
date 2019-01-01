import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

export default (props) => (
  <Grid item xs={12} sm={3}>
    <Typography variant="subtitle2" style={{ marginBottom: 16, fontSize: 15 }}>
      <NumberFormat
        value={props.price}
        displayType='text'
        thousandSeparator='.'
        decimalSeparator=','
        suffix='₫'
        renderText={value => value}
      />
    </Typography>
  </Grid>
);
