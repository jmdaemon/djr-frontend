import * as React from 'react';

import { TextField, Button, FormControl, InputLabel, Input, Box, Avatar, Stack, Grid, BottomNavigation, BottomNavigationAction, OutlinedInput, InputAdornment, IconButton } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Container from '@mui/material/Container';

import ResponsiveAppBar from './TopAppBar';

// import './App.css';
import './Login.css';
import BottomAppBar from './BotAppBar';
import {Link} from 'react-router-dom';

/* <h1>Service Repair App</h1> */

const Login = () => {
  const [value, setValue] = React.useState(0);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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


          {/* <FormControl variant="standard" fullWidth> */}
          {/*   <InputLabel htmlFor="component-simple">Password</InputLabel> */}
          {/*   <Input id="component-simple" defaultValue=""/> */}
          {/* </FormControl> */}

          <FormControl sx={{ }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput fullWidth
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

          {/* <TextField label="Password" color="primary" width="200"> */}
          {/*   Password */}
          {/* </TextField> */}
          
          
          {/* <Grid container spacing={2}> */}
          <Stack spacing={2}>
            <Link to="/customer/user/overview" style={{ color: 'inherit', textDecoration: 'none' }}>
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
            </Link>

            <Link to="/customer/register" style={{ color: 'inherit', textDecoration: 'none' }}>
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
            </Link>
          </Stack>
        </Stack>
        <BottomAppBar/>
      </Stack>
    </>
  );
};

export default Login;
