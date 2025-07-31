import * as React from 'react';

import { TextField, Button, FormControl, InputLabel, Input, Box, Avatar, Stack, Grid, BottomNavigation, BottomNavigationAction } from '@mui/material';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Container from '@mui/material/Container';

import ResponsiveAppBar from './TopAppBar';

import './Login.css';
import BottomAppBar from './BotAppBar';

/* <h1>Service Repair App</h1> */

const Login = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Stack
        sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
        }}
      >
        <ResponsiveAppBar/>

        <Stack
          spacing={2}
          direction="column"
          sx={{
            width: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
          width="800"
        >
          {/* <h1>Account Login</h1> */}

          <Avatar
            src="/broken-image.jpg"
            sx={{
                width: 300,
                height: 300,
                padding: 6,
            }}
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
                width: 400,
              }}
            >
              Login
            </Button>

            <Button
              size='small'
              variant='outlined'
              color='primary'
              sx={{
                width: 400,
              }}
            >
              Register
            </Button>
          </Stack>
        </Stack>
        <BottomAppBar/>
      </Stack>
    </>
  );
};

export default Login;
