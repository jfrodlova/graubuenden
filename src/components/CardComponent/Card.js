import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import cards from "../cardData"
import img1 from "../../img/alpinism.png"

const MediaCard = () => {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardMedia
        sx={{ height: 340 }}
        image={img1}
        title="activity"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hiking
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="medium">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard