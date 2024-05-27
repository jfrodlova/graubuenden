import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cards from "./cardData";
import { Grid } from "@mui/material";

const CardPanel = () => {
  return (
    <div
    // className='flex-container'
    >
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        gap={4}>
        
        {cards.map((oneCard) => {
          const { image, title, description } = oneCard;
          return (
            <Card sx={{ width: 340 }}>
              <CardMedia sx={{ height: 300, objectFit: "contain" }} image={image} title={title} />
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
          );
        })}
      </Grid>
    </div>
  );
};
export default CardPanel;
