import React from 'react';
import {List, ListItemButton, ListItemText, ListSubheader} from "@mui/material";
import {Link} from 'react-router-dom';

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
    <Link to="/customer/user/overview" style={{ color: 'inherit', textDecoration: 'none' }}> 
      <ListItemButton>
        <ListItemText primary="Account Overview" />
      </ListItemButton>
    </Link>

    <Link to="/customer/user/account" style={{ color: 'inherit', textDecoration: 'none' }}>
      <ListItemButton>
        <ListItemText primary="Account Details" />
      </ListItemButton>
    </Link>

    <Link to="/customer/user/repairs" style={{ color: 'inherit', textDecoration: 'none' }}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Device Repairs" />
      </ListItemButton>
    </Link>

    <Link to="/customer/login" style={{ color: 'inherit', textDecoration: 'none' }}>
      <ListItemButton onClick={handleClick}>
          <ListItemText primary="Logout" />
      </ListItemButton>
    </Link>
  </List>
  );
}

export default UserNav;
