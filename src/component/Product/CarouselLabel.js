import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
    background-image: url(${props => props.picture});
    background-position-x: center;
    background-position-y: center;
    background-size: contain;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    height: 70px;
    width: 70px;
`;

export default (props) => (
  <DIV {...props} />
); 
