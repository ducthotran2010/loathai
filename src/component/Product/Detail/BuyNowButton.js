import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import styled from 'styled-components';

const LeftAttachMoneyIcon = styled(AttachMoneyIcon)`
    margin-right: 8px;
`;

export default withStyles(() => ({
  root: {
    paddingTop: '12px',
    paddingBottom: '12px',
    marginLeft: '10px',
  },
}))((props) => (
  <Button variant="outlined" {...props}>
    <LeftAttachMoneyIcon />
        Mua ngay
  </Button>
));
