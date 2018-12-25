import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  tabRoot: {
    textTransform: 'initial',
    width: 200,
  },
});

class Carousel extends Component {
    state = {
      value: 0,
    };

    componentDidMount() {
      this.interval = setInterval(() => this.setState({ value: (this.state.value + 1) % 6 }), 2000);
    }

    handleChange = (event, value) => {
      this.setState({ value });
      clearInterval(this.interval);
      this.interval = setInterval(() => this.setState({ value: (this.state.value + 1) % 6 }), 2000);
    };
    
    render() {
      const { value } = this.state;
      const { classes, carousel } = this.props;
      return (
        <div>
          <SwipeableViews index={value} onChangeIndex={this.handleChange}>
            {carousel.map(i => 
              (<a href={i.href} style={{ textAlign: 'center' }}>
                <div style={{ background: `url(${i.picture}) center no-repeat`, height: 300, width: '100%' }} />
              </a>)
            )}
          </SwipeableViews>
          <AppBar position="static" color="inherit">
            <Tabs 
              value={value} 
              onChange={this.handleChange} 
              scrollable 
              scrollButtons="auto" 
              indicatorColor="primary"
            >
              {carousel.map(i => 
                <Tab classes={{ root: classes.tabRoot }} label={i.title} />  
              )}
            </Tabs>
          </AppBar>

        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    carousel: state.carousel,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Carousel));
