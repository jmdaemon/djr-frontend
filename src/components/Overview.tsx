import React from 'react';
import ResponsiveAppBar from './TopAppBar';
import {Button, Container, FormControl, Grid, Input, InputLabel, List, ListItemButton, ListItemText, ListSubheader, Stack} from '@mui/material';
import BottomAppBar from './BotAppBar';
import UserNav from './UserNav';

const CustomerOverview = () => {
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
          <Grid size={2.5}>
            <UserNav/>
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

export default CustomerOverview;
