import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const CarouselContainer = withStyles(theme => ({
  item: {
    paddingRight: '0px',
    [theme.breakpoints.up('md')]: {
      paddingRight: '8px',
    },
  },
}))(Grid);
  
export const ArticleContainer = withStyles(theme => ({
  item: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      height: '100%',
    },
  }, 
}))(Grid);

export { default as CarouselTab } from './CarouselTab';
export { default as CarouselItem } from './CarouselItem';
export { default as ProductContainer } from './ProductContainer';
