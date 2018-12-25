import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import NumberFormat from 'react-number-format';

const styles = theme => ({
  container: {
    border: '1px solid #ccc',
    padding: theme.spacing.unit,
    marginTop: -1,
    marginLeft: -1,
  },
});

const Product = (props) => {
  const pd = props.product;
  return (
    <Grid xs={4} sm={3} md={2} item classes={{ item: props.classes.container }}>
      <img width="100%" src={pd.picture} alt={pd.name} />
      <Typography variant="subtitle1" component="h6" gutterBottom>
        {pd.name} <br />
        <NumberFormat
          value={pd.price}
          displayType='text'
          thousandSeparator='.'
          decimalSeparator=','
          suffix='₫'
          renderText={value => <font color="red">{value}</font>}
        />
      </Typography>
      <Typography component="p">
        {pd.note}
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(Product);
