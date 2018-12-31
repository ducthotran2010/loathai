import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class TopArticle extends Component {
  render() {
    return (
      <Card style={{ height: 350 }}>
        <CardHeader
          title="Top 5 loa JBT bán chạy nhất tháng 12/2018 tại LOATHAI"
          subheader="T2 31.14.2018"
        />
        <CardMedia
          style={{ height: 120 }}
          image="https://cdn.tgdd.vn/Products/Images/2162/107073/dan-am-thanh-soundbar-sony-ht-rt3-m-300x300.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
          Đứng đầu trong danh sách là tivi TCL L32D3000 sở hữu kiểu dáng đơn giản nhưng mang lại vẻ hiện đại, trẻ trung. 
          Chiếc tivi này cũng gây ấn tượng với màn hình 32 inch gọn nhẹ thích hợp đặt vào nhiều không gian nội thất nhỏ.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default TopArticle;
