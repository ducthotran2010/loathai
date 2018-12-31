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
  item: {
    backgroundColor: '#fff',
    border: '2px solid #f0f0f0',
    padding: theme.spacing.unit * 1.5,
    marginTop: -1,
    marginLeft: -1,
    transition: theme.transitions.create('box-shadow'),
    '&:hover': {
      boxShadow: '0 0 10px 0.1rem rgba(0,0,0,0.2)',
      zIndex: 2,
    },
    color: 'inherit',
    textDecoration: 'none',
  },
}))(Grid);
