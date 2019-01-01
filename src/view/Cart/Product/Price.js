import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

const StyledPar = styled.p`
    margin-bottom: 8px !important;
`;

const StyledHeader = styled(StyledPar)`
    font-size: 15px !important;
    color: red !important;
`;

const StyledLabel = styled(StyledPar)`
    float: left;
    border-radius: 3px;
    padding: 4px 10px;
    color: gray;
    border: 1px solid gray;
`;

export default (props) => (
  <Grid item xs={12} sm={3}>
    <Typography variant="subtitle2" component={StyledHeader}>
      <NumberFormat
        value={props.price}
        displayType='text'
        thousandSeparator='.'
        decimalSeparator=','
        suffix='₫'
        renderText={value => value}
      />
    </Typography>
    { props.truePrice && (
      <Typography variant="body1" component={StyledPar}>
        <NumberFormat
          value={props.truePrice}
          displayType='text'
          thousandSeparator='.'
          decimalSeparator=','
          suffix='₫'
          renderText={value => <strike>{value}</strike>}
        />
      </Typography>)}
    { props.truePrice && (
      <Typography variant="body1" component={StyledLabel}>
        <NumberFormat
          value={props.truePrice - props.price}
          displayType='text'
          thousandSeparator='.'
          decimalSeparator=','
          suffix='₫'
          prefix='-'
          renderText={value => value}
        />
      </Typography>
    )}
     
  </Grid>
);
