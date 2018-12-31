/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { StyledTableCell, CustomPaper, Container } from 'component/Product/Information';

class Information extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h6" style={{ marginBottom: 8, paddingLeft: 8 }}>
        THÔNG TIN CHI TIẾT
        </Typography>
        <CustomPaper>
          <Table>
            <TableBody>
              {this.props.product.information.map(row => (
                <TableRow key={row.key}>
                  <StyledTableCell>{row.key}</StyledTableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CustomPaper>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product,
  };
}
    
export default connect(
  mapStateToProps,
)(Information);
