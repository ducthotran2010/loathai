/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import NormalButton from 'component/NormalButton';
import FeaturedButton from 'component/FeaturedButton';

function mapStateToProps(state) {
  return {
    category: state.homepage.category,
  };
}

class CategoryButton extends Component {
  render() {
    const { category } = this.props;
    return (
      <Grid
        container
        direction="row" justify="flex-start"
        alignItems="center"
        style={{ flex: '1' }}
      >
        <FeaturedButton>
          {category[0]}
        </FeaturedButton>
        {category.filter((i, index) => index !== 0).map(i => (
          <NormalButton key={i}>
            {i}
          </NormalButton>  
        ))}
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(CategoryButton);
