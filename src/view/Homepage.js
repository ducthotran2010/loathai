import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Carousel from '../component/Carousel';
import TopArticle from '../component/TopArticle';
import FeaturedProduct from '../component/FeaturedProduct/index';
 
const styles = theme => ({
  topArticle: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      height: '100%',
    },
  }, 
  slider: {
    paddingRight: '0px',
    [theme.breakpoints.up('md')]: {
      paddingRight: '8px',
    },
  },
});

class Homepage extends Component {
  render() {
    return (
      <Grid container>
        <Grid container>
          <Grid item md={8} xs={12} classes={{ item: this.props.classes.slider }}>
            <Carousel />
          </Grid>
          <Grid item md={4} classes={{ item: this.props.classes.topArticle }}>
            <TopArticle />
          </Grid>
        </Grid>
        <FeaturedProduct />
      </Grid>
    );
  }
}

export default withStyles(styles)(Homepage);
