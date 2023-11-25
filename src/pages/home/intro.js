import React from "react";
import {Button, Container, Typography} from "@mui/material";

const HomeIntro = () => {
  const bgGradient = [
    `linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.7))`,
    // `linear-gradient(var(----black9), var(----black7)`,
  ].join(",");

  return (
    <Container
      disableGutters
      component="main"
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `
          ${bgGradient},
          url(${process.env.PUBLIC_URL + "/static/images/woodman.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <HomeIntroBody />
    </Container>
  );
};

const HomeIntroBody = () => {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ py: 6, px: 2, textAlign: "center" }}
    >
      <Typography
        component="h1"
        variant="h2"
        color="text.primary"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Такой красивый логотип у вас
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
      >
        Хотите свой покажу?
      </Typography>
      <Button href="#/products" variant="contained"
              // color={'secondary'}
              sx={{ mt: 4, px : 4 }}>
        Галерея
      </Button>
    </Container>
  );
};

export default HomeIntro;
