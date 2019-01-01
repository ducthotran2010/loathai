import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const LeftAddShoppingCartIcon = styled(AddShoppingCartIcon)`
    margin-right: 8px;
`;

export default withStyles(theme => ({
  root: {
    margin: theme.spacing.unit * 2,
    marginLeft: 0,
    marginRight: 0,
    height: 48,
    width: '100%',
    maxWidth: '240px',
    color: theme.palette.getContrastText('#f11421'),
    backgroundColor: '#4a90e2',
    '&:hover': {
      backgroundColor: '#3a7ece',
    },
  },
}))((props) => (
  <Button ariant="outlined" {...props}>
    <LeftAddShoppingCartIcon />
        Đặt mua
  </Button>
));
