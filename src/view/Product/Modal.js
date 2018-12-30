/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { CarouselItem, CarouselTab, CarouselLabel } from 'component/Product';
import Carousel from 'component/Carousel';
import Fab from '@material-ui/core/Fab';

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }
  render() {
    const { state, closeModal, product } = this.props;
    return (
      <Modal
        open={state.isModalOpened}
        onClose={closeModal}
        style={{ backgroundColor: 'rgba(1, 1, 1, 0.9)' }}
      >
        <div style={getModalStyle()}>
          <div style={{ position: 'absolute', right: 0, zIndex: 10 }}>
            <Fab size="small" aria-label="Close" onClick={closeModal}>
              <CloseIcon />
            </Fab>
          </div>
          <Carousel
            item={CarouselItem}
            startOn={state.modalIndex}
            stopped
            items={product.featuredPictures}
            itemConfig={{ height: this.state.height - 80, cursor: 'unset' }}
            label={CarouselLabel}
            tab={CarouselTab}
            appBarStyle={{ backgroundColor: 'black' }}
            amount={product.featuredPictures.length}
            getItemKey={i => `modal-carousel-item-${i.name}`}
            getLabelKey={i => `modal-carousel-label-${i.name}`}
            time={2000}
            animateTransitions={false}
          />
        </div>
      </Modal>
    );
  }
}

function getModalStyle() {
  const top = 50;
  const left = 50;
    
  return {
    top: `${top}%`,
    left: `${left}%`,
    outline: 0,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute',
    width: '100%',
    height: '100%',
  };
}

function mapStateToProps(state) {
  return {
    product: state.product,
  };
}

export default connect(mapStateToProps)(ProductModal);
