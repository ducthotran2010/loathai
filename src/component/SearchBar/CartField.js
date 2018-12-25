import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

const styles = theme => ({
  cartButton: {
    margin: theme.spacing.unit,
    borderColor: '#ccc',
  },
  cartTitle: {
    marginRight: 1 * theme.spacing.unit,
    display: 'none',
    textTransform: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class CartField extends Component {
  render() {
    const { classes, cart } = this.props;

    return (
      <Button variant="outlined" color="inherit" className={classes.cartButton}>
        <Typography className={classes.cartTitle} color="inherit" noWrap>
            Giỏ hàng
        </Typography>
        <Badge badgeContent={cart.length} invisible={cart.length === 0} color="secondary" classes={{ badge: classes.badge }}>
          <ShoppingCartIcon />
        </Badge>
      </Button>     
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(CartField));
