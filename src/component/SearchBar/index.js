import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import CartField from './CartField';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  toolbar: {
    width: '100%',
    maxWidth: '1270px',
  },
  menuButton: {
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  app: {
    backgroundColor: '#4a90e2',
  },
});

class SearchBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.app}>
          <Grid container justify="center">
            <Toolbar className={classes.toolbar}>

              <IconButton className={classes.menuButton} color="inherit" component={Link} to="/">
                <MenuIcon />
              </IconButton>

              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                LOATHAI
                </Link>
              </Typography>
              <SearchInput />
              <CartField />
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
