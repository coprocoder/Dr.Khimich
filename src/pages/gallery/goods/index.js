import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {CardMedia} from "@mui/material";
import {goodsConfig} from "./goodsConfig";

const GoodsGallery = () => {
  return (
    <>
      <GoodsIntro />
      <GoodsGrid />
    </>
  );
};

const GoodsIntro = () => {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{pt: 8, pb: 6}}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Products
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Quickly build an effective pricing table for your potential customers
        with this layout. It&apos;s built with default MUI components with
        little customization.
      </Typography>
    </Container>
  );
};

export const GoodsGrid = ({count}) => {
  const gridItems = count ? goodsConfig.slice(0, count) : goodsConfig;
  console.log({gridItems});

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {gridItems.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardMedia
                sx={{height: 140}}
                image={process.env.PUBLIC_URL + "/static/images/woodman.jpg"}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {tier.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tier.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GoodsGallery;
