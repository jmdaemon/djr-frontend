import * as React from 'react';

import { TextField, Button, FormControl, InputLabel, Input, Box, Avatar, Stack, Grid, BottomNavigation, BottomNavigationAction } from '@mui/material';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Container from '@mui/material/Container';

import ResponsiveAppBar from '../../components/AppBar';

import './Login.css';
import BottomAppBar from '../../components/BotAppBar';

/* <h1>Service Repair App</h1> */

const Customer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>


      {/* <Container class="container" className="login-form"> */}
      {/* <Box class="login-form" sx={{ margin: 2 }} */}
      {/*     display="flex" */}
      {/*     justifyContent="center" */}
      {/*     alignItems="center" */}
      {/* > */}


      <Stack
        sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
        }}
      >
        <ResponsiveAppBar></ResponsiveAppBar>

        <Stack
          spacing={2}
          direction="column"
          sx={{
            width: 300,
            justifyContent: "center",
            alignItems: "center",
          }}
          width="800"
        >
          {/* <h1>Account Login</h1> */}

          <Avatar
            src="/broken-image.jpg"
            sx={{ width: 300, height: 300 }}
          />

          <h1>Login</h1>

          {/* <TextField label="Email" color="primary" width="200"> */}
          {/*   Email */}
          {/* </TextField> */}

          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input id="component-simple" defaultValue=""/>
          </FormControl>


          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple">Password</InputLabel>
            <Input id="component-simple" defaultValue=""/>
          </FormControl>

          {/* <TextField label="Password" color="primary" width="200"> */}
          {/*   Password */}
          {/* </TextField> */}
          
          
          {/* <Grid container spacing={2}> */}
          <Stack spacing={2}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              sx={{
                width: 300,
              }}
            >
              Login
            </Button>

            <Button
              size='small'
              variant='outlined'
              color='primary'
              sx={{
                width: 300,
              }}
            >
              Register
            </Button>
          {/* </Grid> */}
          </Stack>
        </Stack>
        <BottomAppBar></BottomAppBar>

        {/* <BottomNavigation */}
        {/*   showLabels */}
        {/*   value={value} */}
        {/*   onChange={(event, newValue) => { */}
        {/*     setValue(newValue); */}
        {/*   }} */}
        {/* > */}
        {/*   <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
        {/*   <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
        {/*   <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        {/* </BottomNavigation> */}
      </Stack>

      {/* </Box> */}
      {/* </Container> */}

      <h2>Account Information </h2>

      <p>Here is where we will show the customer's account information</p>
      <ul>
        <li> View Account Profile </li>
        <li> Edit Account Details </li>
      </ul>

      <h2>Invoices</h2>
      <p>Here is where we will show the customer's transaction information and history </p>

      <h2>Repair History</h2>
      <p>Here is where we will show the current and previous device repairs history </p>

      <h2> Frontend Roadmap </h2>
      <ol>
        <li> Determine requirements of all users </li>
        <li> Sketch ui/ux wireframe for all interfaces and forms </li>
        <li> Design components </li>
        <li> Style components </li>
        <li> Create front-end data structures for back-end model data </li>
        <li> Integrate front-end with backend using HTTP requests via Axiom or fetch </li>
      </ol>


    </div>
  );
};

export default Customer;
