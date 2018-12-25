import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  cartButton: {
    margin: theme.spacing.unit,
    borderColor: '#ccc',
  },
  cartTitle: {
    marginLeft: 1 * theme.spacing.unit,
    display: 'none',
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  tooltip: {
    fontSize: '20px',
  },
});

class CartButton extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Tooltip title="0947857301" classes={{ tooltip: classes.tooltip }}>
        <a href="tel:+84947857301" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button color="inherit">
            <LocalPhoneIcon />
            <Typography className={classes.cartTitle} color="inherit">
            Liên hệ
            </Typography>
          </Button>     
        </a>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(CartButton);
