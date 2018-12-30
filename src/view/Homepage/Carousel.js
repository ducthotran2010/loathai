/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'component/Carousel';
import { CarouselItem, CarouselTab } from 'component/Homepage';

class HomepageCarousel extends Component {
  render() {
    return (<Carousel
      item={CarouselItem}
      items={this.props.carousel}
      label={i => i.title}
      tab={CarouselTab}
      amount={this.props.carousel.length}
      getItemKey={i => `carousel-item-${i.title}`}
      getLabelKey={i => `carousel-label-${i.title}`}
      time={2000}
    />);
  }
}
function mapStateToProps(state) {
  return {
    carousel: state.homepage.carousel,
  };
}

export default connect(mapStateToProps)(HomepageCarousel);
  
