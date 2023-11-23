import React, {useState} from "react";
import {Link} from "react-router-dom";

import {
  Divider, Drawer, IconButton, List, ListItem, ListItemText, Box, Button, ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Close from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Close";
import {menuConfig} from "./config";
import FeedbackDialog from '../../feedback/feedbackDialog'

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

          {/*<Button href="#" variant="outlined" sx={{my: 2}} fullWidth>*/}
          {/*  Связаться*/}
          {/*</Button>*/}
          <FeedbackDialog />
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
