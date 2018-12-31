import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const BarContainer = withStyles(theme => ({
  container: {
    height: '65px',
    width: '100%',
    backgroundColor: '#03255d',
    textAlign: 'center',
    background: 'url(https://cdn.tgdd.vn/dmx2016/Content/images/campaign/noel/bnnodel2018new.png)',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}))(Grid);

class TopBar extends Component {
  render() {
    return (
      <BarContainer container />
    );
  }
}

export default TopBar;
