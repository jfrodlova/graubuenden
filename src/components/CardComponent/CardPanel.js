import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cards from "./cardData";
import { Grid } from "@mui/material";

const CardPanel = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      gap={4}
    >
      {cards.map((oneCard, card_index) => {
        const { image, title, description} = oneCard;
        return (
          <Card sx={{ width: 340 }} key={card_index}>
            <CardMedia
              sx={{ height: 300, objectFit: "contain", margin: 3 }}
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
          </Card>
        );
      })}
    </Grid>
  );
};
export default CardPanel;