import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export const CarouselContainer = withStyles(theme => ({
  item: {
    paddingRight: '0px',
    [theme.breakpoints.up('md')]: {
      padding: '0px 16px',
      borderRightWidth: '3px',
      borderRightStyle: 'solid',
      borderRightColor: '#f0f0f0',
    },
  },
}))(Grid);
  
export { default as CarouselItem } from './CarouselItem';
export { default as CarouselLabel } from './CarouselLabel';
export { default as CarouselTab } from './CarouselTab';
export { Container } from './Information';
