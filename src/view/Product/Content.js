/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Container } from 'component/Product';
import { Container as ContentContainer } from 'component/Product/Content';
import Collapse from '@material-ui/core/Collapse'; 
import { ReadMoreButton, DIV } from 'component/Product/Detail/ProductFeature';
import { Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapseIn: false };
    this.updateTypographyHeight = this.updateTypographyHeight.bind(this);
  }

  componentDidMount() {
    this.updateTypographyHeight();
  }
      
  updateTypographyHeight() {
    const element = document.getElementById('product-content');
    this.setState({
      isCollapseIn: element.clientHeight < 250,
    });
  }

  toggleCollapse = () => {
    this.setState((state) => ({ isCollapseIn: !state.isCollapseIn }));
  }
  
  render() {
    return (
      <Container>
        <Typography variant="h6" style={{ marginBottom: 8, paddingLeft: 8 }}>
            MÔ TẢ SẢN PHẨM
        </Typography>
        <ContentContainer>
          <Collapse in={this.state.isCollapseIn} collapsedHeight="250px" style={{ position: 'relative' }}>
            {
              !this.state.isCollapseIn && (<DIV />)
            }
            <Typography id="product-content">
              {this.props.product.content}  
            </Typography>
          </Collapse>
          <Grid container justify="center">
            <ReadMoreButton 
              onClick={this.toggleCollapse} 
              label={this.state.isCollapseIn ? 'Thu gọn' : 'Xem thêm'} 
              icon={this.state.isCollapseIn ? KeyboardArrowUpIcon : null}
            />
          </Grid>
        </ContentContainer>
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
)(Content);
