import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CategoryButton from './CategoryGroup';
import FeaturedProducts from './FeaturedProducts';

const styles = theme => ({
  container: {
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    marginTop: '20px',
  },
});

class FeaturedProduct extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container 
        classes={{ container: classes.container }}
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <img alt="" width="300" className="imgbutton" src="https://cdn.tgdd.vn/dmx2016/Content/images/home2019/titleGiasocquangon-noel.png" />
        <CategoryButton />
        <FeaturedProducts />
      </Grid>
    );
  }
}

export default withStyles(styles)(FeaturedProduct);
