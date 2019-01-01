import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export const ProductContainer = withStyles(theme => ({
  container: {
    paddingRight: '0px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '1000px',
    [theme.breakpoints.up('md')]: {
      marginRight: '16px',
    },
  },
}))(Grid);

export const TotalContainer = withStyles(() => ({
  container: {
    flex: 1,
    minWidth: '254px',
    maxWidth: '1000px',
    position: 'sticky',
    top: '70px',
  },
}))(Grid);
  
