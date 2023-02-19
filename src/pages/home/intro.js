import {Button, Container, Typography} from "@mui/material";

const HomeIntro = () => {
  const bgGradient = [
    "linear-gradient(var(--darkWhiteTransparent), var(--darkWhiteTransparent))",
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
          url(${"static/images/woodman.jpg"})`,
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
      sx={{
        pt: 6,
        pb: 6,
        textAlign: "center",
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Создаём интерьер вашей мечты
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Студия Дмитрия Крикунова
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 4,
          textAlign: "center",
        }}
      >
        Галерея
      </Button>
    </Container>
  );
};

export default HomeIntro;
