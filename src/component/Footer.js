import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #eee;
    margin-top: 30px;
    padding-bottom: 10px;
`;
class Footer extends Component {
  render() {
    return (
      <Container>
        <Grid container justify="center">
          <Grid container style={{ maxWidth: '1270px', width: '100%', marginTop: '10px', paddingTop: 20 }} direction="column">
            <Grid container justify="space-around">
              <div>
                <Typography variant="button">
                    Hỗ trợ khách hàng
                </Typography>
                <Typography variant="body2" style={{ color: '#c4011a' }}>
                    Liên hệ: 0xxx.xxx.xxx
                </Typography>
              </div>
              <div>
                <Typography variant="button">
                    Phương thức thanh toán
                </Typography>
                <Typography variant="body1">
                  <ul>
                    <li>ABC</li>
                    <li>XYZ</li>
                  </ul>
                </Typography>
              </div>                
              <div>
                <Typography variant="button">
                    Kết nối với chúng tôi
                </Typography>
                <Typography variant="body1">
                  <ul>
                    <li>ABC</li>
                    <li>XYZ</li>
                  </ul>
                </Typography>
              </div>                
            </Grid>
            <Typography variant="body2">
                Copyright © 2018 - LoaThai. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Footer;
