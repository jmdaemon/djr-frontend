import React from 'react';
import {List, ListItemButton, ListItemText, ListSubheader} from "@mui/material";

const UserNav = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
  <List
    sx={{
        width: '100%',
        maxWidth: 200,
        bgcolor: 'background.paper',
        marginLeft: 6,
    }}
    component="nav"
    aria-labelledby="nested-list-subheader"
  subheader={
      <ListSubheader component="div" id="nested-list-subheader">
    <h2>Dashboard</h2>
      </ListSubheader>
    }
  >
    <ListItemButton>
      <ListItemText  primary="Account Overview" />
    </ListItemButton>

    <ListItemButton>
      <ListItemText primary="Account Details" />
    </ListItemButton>

    <ListItemButton onClick={handleClick}>
      <ListItemText primary="Device Repairs" />
      {/* {open ? <ExpandLess /> : <ExpandMore />} */}
    </ListItemButton>

    <ListItemButton onClick={handleClick}>
      <ListItemText primary="Logout" />
      {/* {open ? <ExpandLess /> : <ExpandMore />} */}
    </ListItemButton>
  </List>
  );
}

export default UserNav;
