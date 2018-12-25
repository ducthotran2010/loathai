import React, { Component } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
    height: 65px;
    width: 100%;
    background-color: #03255d;
    text-align: center;
    background: url(https://cdn.tgdd.vn/dmx2016/Content/images/campaign/noel/bnnodel2018new.png)
`;

class TopBar extends Component {
  render() {
    return (
      <BarContainer />
    );
  }
}

export default TopBar;
