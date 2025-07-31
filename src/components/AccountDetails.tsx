import React from 'react';
import ResponsiveAppBar from './TopAppBar';
import {Button, FormControl, Grid, Input, InputLabel, Stack} from '@mui/material';
import BottomAppBar from './BotAppBar';
import {Link} from 'react-router-dom';
import UserNav from './UserNav';

const AccountDetails = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Stack
        sx={{
            gap: 6,
        }}
      >
        <ResponsiveAppBar/>

          <Grid container size={2}
          >
            <Grid size={2.5}>
              <UserNav/>
            </Grid>
            {/* <h1>Account Details</h1> */}
            {/* <h2>Your Account</h2> */}
            <Grid container size={4} spacing={2}>
              <h2>Account Details</h2>

              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="component-simple">First Name</InputLabel>
                <Input id="component-simple" defaultValue="First Name"/>
              </FormControl>

              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                <Input id="component-simple" defaultValue="Last Name"/>
              </FormControl>

              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <Input id="component-simple" defaultValue="Email"/>
              </FormControl>

              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="component-simple">Phone</InputLabel>
                <Input id="component-simple" defaultValue="Phone"/>
              </FormControl>

              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="component-simple">Password</InputLabel>
                <Input id="component-simple" defaultValue="Password"/>
              </FormControl>

              <Button
                size='small'
                variant='outlined'
                color='primary'
                // fullWidth
                sx={{
                   marginLeft: "auto",
                }}
              >
                Save
              </Button>

            </Grid>
          </Grid>
        </Stack>
      <BottomAppBar/>
    </>
  );
}

export default AccountDetails;
