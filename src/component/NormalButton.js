import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export default withStyles((theme) => ({
  button: {
    margin: theme.spacing.unit,
    textTransform: 'none',
  },
}))((props) => (
  <Button size='large' variant="outlined" className={props.classes.button}>
    {props.children}
  </Button>
));
