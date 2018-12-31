/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'component/Carousel';
import { CarouselItem, CarouselTab, CarouselLabel } from 'component/Product';

class ProductCarousel extends Component {
  render() {
    return (
      <Carousel
        item={CarouselItem}
        stopped={this.props.isModalOpened}
        onClickItem={this.props.openModal}
        items={this.props.product.featuredPictures}
        label={CarouselLabel}
        tab={CarouselTab}
        appBarStyle={{ boxShadow: 'none' }}
        amount={this.props.product.featuredPictures.length}
        getItemKey={i => `carousel-item-${i.name}`}
        getLabelKey={i => `carousel-label-${i.name}`}
        time={2000}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    product: state.product,
  };
}

export default connect(mapStateToProps)(ProductCarousel);
