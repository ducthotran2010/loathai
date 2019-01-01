import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TopBar from '../component/TopBar';
import SearchBar from '../component/SearchBar';
import Homepage from './Homepage';
import Product from './Product';
import Cart from './Cart';
import Booking from './Booking/index';
import NotFound from './NotFound';
import Footer from '../component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SearchBar />
        <Grid container justify="center">
          <Grid container style={{ maxWidth: '1270px', width: '100%', marginTop: '10px' }}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/product" component={Product} />
              <Route path="/cart" component={Cart} />
              <Route path="/booking" component={Booking} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
