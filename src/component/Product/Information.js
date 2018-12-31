import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
`;

export const StyledTableCell = withStyles(() => ({
  root: {
    fontWeight: 500,
    backgroundColor: '#efefef',
    padding: '4px 10px 4px 24px',
    width: '40%',
  },
}))(TableCell);
  
export const CustomPaper = withStyles(() => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    maxWidth: 1000,
    fontSize: 15,
  },
}))(Paper);
  
