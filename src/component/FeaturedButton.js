import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    textTransform: 'none',
    background: 'linear-gradient(45deg, rgba(254, 107, 139, 0.9) 30%, rgba(255, 142, 83, 0.9) 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0px 35px',
    transition: theme.transitions.create(['box-shadow', 'background']),
    '&:hover': {
      boxShadow: '0px 0px 5px .2rem rgba(255, 105, 135, .3)',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  },
});

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={classNames(classes.root, className)} {...other}>
      {children}
    </Button>
  );
}

export default withStyles(styles)(ClassNames);
