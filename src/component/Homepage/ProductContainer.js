import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledGrid = withStyles(theme => ({
  container: {
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    marginTop: '20px',
  },
}))(Grid);

export default (props) => (
  <StyledGrid
    container 
    direction="column"
    justify="space-around"
    alignItems="center"
  >
    {props.children}
  </StyledGrid>
);

export const ProductGrid = withStyles(theme => ({
  container: {
    border: '1px solid #ccc',
    padding: theme.spacing.unit,
    marginTop: -1,
    marginLeft: -1,
  },
}))(Grid);
