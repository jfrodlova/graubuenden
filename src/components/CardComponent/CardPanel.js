import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cards from "./cardData"



const CardPanel= () => {
  
  return <div className='flex-container'>
    
    {cards.map((oneCard) => {
      const {image, title, description} = oneCard
      return  <Card sx={{ minWidth: 300 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={image}
        title={title}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="medium">Learn More</Button>
      </CardActions>
    </Card>
    })
    }

   
  </div>
  
}
export default CardPanel