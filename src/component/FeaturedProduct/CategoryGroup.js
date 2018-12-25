import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import NormalButton from '../NormalButton';

function mapStateToProps(state) {
  return {
    category: state.category,
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
        {category.map(i => (
          <NormalButton key={i}>
            {i}
          </NormalButton>  
        ))}
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(CategoryButton);
