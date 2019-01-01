import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Header = styled.p`
    font-size: 1.3rem !important;
    text-align: center;
    margin: 8px 24px !important;
`;

export const Quantity = styled.span`
    font-weight: 300;
`;
export const Name = styled.span`

`;

export const OrderContainer = withStyles(theme => ({
  item: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '16px 0px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
      borderRightWidth: '3px',
      borderRightStyle: 'solid',
      borderRightColor: '#fafafa',
    },
  },
}))(Grid);

export const AddressContainer = withStyles(() => ({
  item: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '16px 16px',
  },
}))(Grid);

export const StyledTableCell = withStyles(() => ({
  root: {
    fontWeight: 500,
    fontSize: 15,
    backgroundColor: '#efefef',
    color: '#222',
    padding: '4px 10px 4px 24px',
  },
}))(TableCell);

export const NormalTableCell = withStyles(() => ({
  root: {
    fontSize: 15,
    textDecoration: 'none',
  },
}))(TableCell);
