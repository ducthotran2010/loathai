/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { CarouselItem, CarouselTab, CarouselLabel } from 'component/Product';
import Modal, { ModalContainer, ModalExit } from 'component/Product/Modal';
import Carousel from 'component/Carousel';
import IconButton from '@material-ui/core/IconButton';

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
      <Modal open={state.isModalOpened} onClose={closeModal}>
        <ModalContainer>
          <ModalExit>
            <IconButton onClick={closeModal} style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
              <CloseIcon />
            </IconButton>
          </ModalExit>
          <Carousel
            item={CarouselItem}
            startOn={state.modalIndex}
            stopped
            items={product.featuredPictures}
            itemConfig={{ height: this.state.height - 80, cursor: 'unset' }}
            label={CarouselLabel}
            tab={CarouselTab}
            amount={product.featuredPictures.length}
            getItemKey={i => `modal-carousel-item-${i.name}`}
            getLabelKey={i => `modal-carousel-label-${i.name}`}
            time={2000}
          />
        </ModalContainer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
  };
}

export default connect(mapStateToProps)(ProductModal);
