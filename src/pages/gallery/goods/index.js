import React, {useState} from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Box,
  CardMedia,
  Pagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
      sx={{py: 6, px: 1}}
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
  const [page, setPage] = useState(1);
  const gridItems = count ? goodsConfig.slice(0, count) : goodsConfig;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const numItemsOnPage = isMobile ? 3 : 6;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5}>
        {gridItems.slice(page, page + numItemsOnPage).map((item, i) => (
          <Grid item key={i} xs={12} sm={4} md={4} >
            <Card>
              <CardMedia
                sx={{height: 140}}
                image={process.env.PUBLIC_URL + "/static/images/woodman.jpg"}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={item.buttonVariant}>
                  {item.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{my: 5}}
      >
        <Pagination
          count={Math.ceil(gridItems.length / numItemsOnPage)}
          onChange={handleChangePage}
          size="large"
          variant="outlined"
          color="primary"
          shape="rounded"
          defaultPage={1}
          page={page}
          siblingCount={1}
          boundaryCount={2}
        />
      </Box>
    </Container>
  );
};

export default GoodsGallery;
