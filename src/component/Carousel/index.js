import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { mod } from 'react-swipeable-views-core';
import IconButton from './IconButton';
import StyledTabs from './StyledTabs';
import DirectionArea, { LeftArea, RightArea } from './DirectionArea';

const AutoPlay = autoPlay(SwipeableViews);

class Carousel extends Component {
    state = {
      value: this.props.startOn || 0,
    };
    
    handleChangeTabs = (event, value) => {
      this.setState({ value });
    };

    handleChange = value => {
      this.setState({ value });
    };

    handleChangeLeft = () => {
      this.setState((state, props) => ({ 
        value: mod(state.value - 1, props.amount),
      }));
    };
      
    handleChangeRight = () => {
      this.setState((state, props) => ({ value: mod(state.value + 1, props.amount) }));
    };

    handleClickItem = () => {
      if (this.props.onClickItem) {
        this.props.onClickItem(this.state.value);
      }
    }
    
    render() {
      const { value } = this.state;
      const { items } = this.props;

      return (
        <div>
          <DirectionArea {...this.props.itemConfig}>
            <LeftArea>
              <IconButton onClick={this.handleChangeLeft}>
                <KeyboardArrowLeft />
              </IconButton>
            </LeftArea>
            <RightArea>
              <IconButton onClick={this.handleChangeRight}>
                <KeyboardArrowRight />
              </IconButton>
            </RightArea>
            <AutoPlay 
              index={value} 
              onChangeIndex={this.handleChange} 
              onClick={this.handleClickItem} 
              autoplay={!this.props.stopped} 
              interval={this.props.time}
              animateTransitions={this.props.animateTransitions}
            >
              {items.map(i => 
                <this.props.item key={this.props.getItemKey(i)} {...i} {...this.props.itemConfig} />
              )}
            </AutoPlay>
          </DirectionArea>
          
          <AppBar position="static" color="inherit" style={this.props.appBarStyle}>
            <StyledTabs 
              value={value} 
              onChange={this.handleChangeTabs} 
            >
              {items.map(i => 
                <this.props.tab key={this.props.getLabelKey(i)} label={this.props.label(i)} />
              )}
            </StyledTabs>
          </AppBar>

        </div>
      );
    }
}

export default Carousel;
