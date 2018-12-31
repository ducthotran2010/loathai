import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export const Container = styled.div`
    margin: 20px;
`;

export const StyledDivider = styled(Divider)`
    height: 3px !important; 
    background-color: #f0f0f0 !important; 
    margin-top: 10px !important;
    margin-bottom: 20px !important;
`;

export const DIV = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: transparent;
    background-image: linear-gradient(transparent, white 90%);
    text-align: center;
    height: 58px;
    padding-top: 42px;
`;

export const ReadMoreButton = withStyles(theme => ({
  button: {
    textTransform: 'initial',
    margin: theme.spacing.unit,
    backgroundColor: '#fff',
    color: '#40a9ff',
    border: '1px solid rgba(64, 169, 255, 0.8)',
    '&:hover': {
      border: '1px solid #40a9ff',
    },
  },
  rightIcon: {
    marginRight: theme.spacing.unit,
  },
}))((props) => {
  const getIcon = (prop) => ((prop.icon) ? 
    (<prop.icon className={props.classes.rightIcon} />) : 
    (<KeyboardArrowDownIcon className={props.classes.rightIcon} />));
  return (
    <Button 
      variant="outlined" 
      className={props.classes.button}
      onClick={props.onClick}
      color="primary"
    >
      {getIcon(props)}
      {props.label || 'Xem thêm'}
    </Button>
  );
});
