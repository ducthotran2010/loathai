import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 160,
  },
};

class TopArticle extends Component {
  render() {
    return (
      <Card style={{ height: '350px' }}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={this.props.classes.media}
          image="https://cdn.tgdd.vn/qcao/28_11_2018_16_31_14_BigSS-T12-398-110.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica acrossate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica across...
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(TopArticle);
