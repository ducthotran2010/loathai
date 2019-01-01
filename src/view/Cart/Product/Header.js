import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default (props) => (
  <Grid item xs={12} sm={5}>
    <Typography variant="subtitle2" style={{ marginBottom: 16, fontSize: 18 }}>
      {props.name}
    </Typography>
    <Typography component="font" color="blue">
      <span href="#" style={{ textDecoration: 'none', color: 'blue' }}>Xóa</span>
    </Typography>
  </Grid>
);
