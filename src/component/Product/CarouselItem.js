import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
    background-image: url(${props => props.picture});
    background-position-x: center;
    background-position-y: center;
    background-size: contain;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    height: ${props => (props.height ? `${props.height}px` : '300px')};
    width: 100%;
    cursor: ${props => (props.cursor ? props.cursor : 'pointer')};
`;

export default (props) => (
  <DIV {...props} />
); 
