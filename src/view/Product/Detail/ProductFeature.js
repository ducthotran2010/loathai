/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse'; 
import { Container, StyledDivider, ReadMoreButton, DIV } from 'component/Product/Detail/ProductFeature';

class ProductFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapseIn: false,
    };
    this.updateTypographyHeight = this.updateTypographyHeight.bind(this);
  }

  componentDidMount() {
    this.updateTypographyHeight();
  }

  updateTypographyHeight() {
    const element = document.getElementById('product-feature');
    this.setState({
      isCollapseIn: element.clientHeight < 100,
    });
  }

  disableCollapse = () => {
    this.setState({ isCollapseIn: true });
  }

  render() {
    const { product } = this.props;
    return (
      <Container>
        <StyledDivider />
        <Typography variant="subtitle2">
            ĐẶC ĐIỂM NỔI BẬT
        </Typography>
        <Collapse in={this.state.isCollapseIn} collapsedHeight="100px" style={{ position: 'relative' }}>
          {
            !this.state.isCollapseIn && (<DIV>
              <ReadMoreButton onClick={this.disableCollapse} />
            </DIV>)
          }
          <Typography component="ul" id="product-feature">
            {product.feature.map(i => (<li key={i}>{i}</li>))}
          </Typography>
        </Collapse>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
  };
}
  
export default connect(
  mapStateToProps,
)(ProductFeature);
  
