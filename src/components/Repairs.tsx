import React from 'react';
import ResponsiveAppBar from './TopAppBar';
import {Button, Container, FormControl, Grid, Input, InputLabel, List, ListItemButton, ListItemText, ListSubheader, Stack} from '@mui/material';
import BottomAppBar from './BotAppBar';

const Repairs = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Stack
        sx={{
            gap: 6,
        }}
      >
        <ResponsiveAppBar/>

        <Grid container spacing={2}>
          <Grid size={3}>
            <List
              sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
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
          </Grid>

          <Grid size={4}>
            <h2>Your Information</h2>

            <p>First Name</p>

            <p>Last Name</p>

            <p>Email</p>

            <p>Phone</p>
          </Grid>

          <Grid size={4}>
          </Grid>

        </Grid>
      </Stack>
      <BottomAppBar/>
    </>
  );
}

export default Repairs;
