import React, {useEffect, useState, useRef, useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {Slide, useScrollTrigger} from "@mui/material";

import {ReactComponent as LogoMin} from "../../assets/logo_min.svg";
import {ReactComponent as LogoMax} from "../../assets/logo_max.svg";

import "./header.scss";

const HideOnScroll = (props) => {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  const [isNarrow, setNarrow] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => {
      setNarrow(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);
    return window.addEventListener("resize", null);
  }, []);

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
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
            href={` ${process.env.PUBLIC_URL}/#`}
            sx={{flexGrow: 1, my: 1, mx: 1.5}}
            className="header-logo"
          >
            {isNarrow ? <LogoMin /> : <LogoMax />}
          </Link>

          <nav>
            <Link
              variant="button"
              color="text.primary"
              href={` ${process.env.PUBLIC_URL}/#`}
              sx={{my: 1, mx: 1.5}}
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
        </Toolbar>

        <div className="header-activateArea" />
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
