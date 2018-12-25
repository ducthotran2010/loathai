import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #eee;
    margin-top: 30px;
`;
class Footer extends Component {
  render() {
    return (
      <Container>
        <Grid container justify="center">
          <Grid container style={{ maxWidth: '1270px', width: '100%', marginTop: '10px' }}>
                Some salt
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Footer;
