import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const LeftAddShoppingCartIcon = styled(AddShoppingCartIcon)`
    margin-right: 8px;
`;

export default withStyles(theme => ({
  root: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    height: 48,
    width: '100%',
    maxWidth: '312px',
    color: theme.palette.getContrastText('#f11421'),
    backgroundColor: '#ff3945',
    '&:hover': {
      backgroundColor: '#f11421',
    },
  },
}))((props) => (
  <Button ariant="outlined" {...props}>
    <LeftAddShoppingCartIcon />
        Thêm vào giỏ hàng
  </Button>
));
