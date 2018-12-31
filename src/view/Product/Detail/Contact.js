import React, { Component } from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import SecurityIcon from '@material-ui/icons/Security';

const DIV = styled.div`
    margin: 10px 0px 0px;
    border-radius: 4px;
    border: 2px solid #f0f0f0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <DIV>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Liên hệ"
                secondary="0xxx.xxx.xxx"
              />
            
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <SecurityIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Thông tin bảo hành" 
                secondary="Bảo hành 12 tháng"
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Chính sách giao hàng" 
                secondary="Giao hàng tận nơi"
              />
            </ListItem>

          </List></DIV>
      </Container>
    );
  }
}

export default Contact;
