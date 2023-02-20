import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import {menuConfig} from "./config";

const HeaderMenuFull = () => {
  return (
    <>
      <nav>
        {Object.values(menuConfig).map((x, i) => (
          <Link
            key={i}
            variant="button"
            color="text.primary"
            href={x.link}
            sx={{my: 1, mx: 1.5}}
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
