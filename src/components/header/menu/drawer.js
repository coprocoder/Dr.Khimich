import React, {useState} from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {Link} from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import {menuConfig} from "./config";
import {Box, Button, ListItemIcon} from "@mui/material";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  link: {
    fontSize: "20px",
    color: "var(--primary)",
    "&:hover": {
      color: "var(--primarySecond)",
    },
  },
  icon: {
    color: "white",
  },
}));

function HeaderMenuDrawer() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const items = Object.values(menuConfig);
  return (
    <>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{p: 1}}>
          <Box sx={{mb: 1}}>
            <IconButton
              onClick={() => setOpenDrawer(!openDrawer)}
              className={classes.icon}
            >
              <Close />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {items.map((x, i) => {
              const MenuItemIcon = x.icon;
              return (
                <div key={`menuItem_${i}`}>
                  <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                      <MenuItemIcon sx={{color: "primary.main"}} />
                    </ListItemIcon>
                    <ListItemText>
                      <Link to={x.link} className={classes.link}>
                        {x.label}
                      </Link>
                    </ListItemText>
                  </ListItem>
                </div>
              );
            })}
          </List>

          <Divider />

          <Button href="#" variant="outlined" sx={{my: 2}} fullWidth>
            Связаться
          </Button>
        </Box>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default HeaderMenuDrawer;
