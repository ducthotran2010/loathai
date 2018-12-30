import React from 'react';
import styled from 'styled-components';

const A = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

// const DIV = styled.div`
//     background-image: url(${props => props.picture});
//     background-position-x: center;
//     background-position-y: center;
//     background-size: contain;
//     background-repeat-x: no-repeat;
//     background-repeat-y: no-repeat;
//     background-attachment: initial;
//     background-origin: initial;
//     background-clip: initial;
//     background-color: initial;
//     height: ${props => (props.height ? `${props.height}px` : '300px')};
//     width: 100%;
// `;

const IMG = styled.img`
    max-height: ${props => (props.height ? `${props.height}px` : '300px')};
`;

export default (props) => (
  <A href={props.href}>
    { /* <DIV {...props} /> */ }
    <IMG src={props.picture} width="100%" />
  </A>
); 

