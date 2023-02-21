import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import {menuConfig} from "./config";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  link: {
    // color: "var(--primary)",
    "&:hover": {
      color: "var(--primarySecond)",
    },
  },
});

const HeaderMenuFull = () => {
  const classes = useStyles();
  return (
    <>
      <nav>
        {Object.values(menuConfig).map((x, i) => (
          <Link
            key={i}
            variant="button"
            // color="text.primary"
            href={x.link}
            sx={{my: 1, mx: 1.5, color: "var(--primary)"}}
            className={classes.link}
          >
            {x.label}
          </Link>
        ))}
      </nav>
      <Button href="#" variant="outlined" sx={{my: 1, mx: 1.5}}>
        Связаться
      </Button>
    </>
  );
};

export default HeaderMenuFull;
