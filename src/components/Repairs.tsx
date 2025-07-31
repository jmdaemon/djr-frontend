import React from 'react';
import {Button, Container, FormControl, Grid, Input, InputLabel, List, ListItemButton, ListItemText, ListSubheader, Stack} from '@mui/material';

import ResponsiveAppBar from './TopAppBar';
import BottomAppBar from './BotAppBar';
import RequestsTable from './RepairRequests';
import UserNav from './UserNav';
import RepairsTable from './RepairsTable';

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
          <Grid size={2.5}>
            <UserNav/>
          </Grid>

          <Grid size={4}>
            <h2>Service Requests</h2>
            <RequestsTable/>
          </Grid>

          <Grid size={4}>
            <h2>Repair Jobs</h2>
            <RepairsTable/>
          </Grid>

        </Grid>
      </Stack>

      <BottomAppBar/>
    </>
  );
}

export default Repairs;
