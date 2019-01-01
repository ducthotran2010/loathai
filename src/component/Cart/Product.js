import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 28px 20px;
    border-bottom: 3px solid #fafafa;
    overflow: hidden;
`;
// export const Container = withStyles((theme) => ({
//   item: {
//     borderBottom: '3px solid #fafafa',
//     padding: '28px 10px',
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       padding: '28px 20px',
//     },
//   },
// }))(Grid);

export const ImgDiv = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
`;

export const ContentDiv = withStyles((theme) => ({
  container: {
    marginLeft: '16px',
    marginRight: '0',
    [theme.breakpoints.up('md')]: {
      marginLeft: '36px',
      marginRight: '16px',
    },
  },
}))(Grid);

// export const ContentDiv = styled.div`
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     box-sizing: border-box;
//     padding: 0px 8px 0px 24px;
// `;
