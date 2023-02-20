import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import {Slide, useMediaQuery, useScrollTrigger, useTheme} from "@mui/material";

import DrawerComponent from "./drawer";

import {ReactComponent as LogoMin} from "../../assets/logo_min.svg";
import {ReactComponent as LogoMax} from "../../assets/logo_max.svg";
import "./header.scss";

const HideOnScroll = (props) => {
  const {children, window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{flexWrap: "wrap"}} className="header">
          {/* <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
            Company name
          </Typography> */}
          <Link
            variant="body2"
            color="text.primary"
            href={` ${process.env.PUBLIC_URL}/`}
            sx={{flexGrow: 1, my: 1, mx: 1.5}}
            className="header-logo"
          >
            {isMobile ? <LogoMin /> : <LogoMax />}
          </Link>

          {isMobile ? <DrawerComponent /> : <HeaderMenu />}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

const HeaderMenu = () => {
  // const useStyles = makeStyles((theme) => ({
  //   link: {
  //     textDecoration: "none",
  //     color: "white",
  //     fontSize: "20px",
  //     marginLeft: theme.spacing(20),
  //     borderBottom: "1px solid transparent",
  //     "&:hover": {
  //       color: "yellow",
  //       borderBottom: "1px solid white",
  //     },
  //   },
  // }));

  // const classes = useStyles();

  return (
    <>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href={` ${process.env.PUBLIC_URL}/`}
          sx={{my: 1, mx: 1.5}}
          // className={classes.link}
        >
          Home
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href={`${process.env.PUBLIC_URL}/#/pricing`}
          sx={{my: 1, mx: 1.5}}
        >
          Pricing
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href={`${process.env.PUBLIC_URL}/#`}
          sx={{my: 1, mx: 1.5}}
        >
          Support
        </Link>
      </nav>
      <Button href="#" variant="outlined" sx={{my: 1, mx: 1.5}}>
        GOODS
      </Button>
    </>
  );
};

export default Header;
