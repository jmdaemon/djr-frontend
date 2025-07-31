import React from 'react';
import ResponsiveAppBar from './TopAppBar';
import {Button, FormControl, Input, InputLabel, Stack} from '@mui/material';
import BottomAppBar from './BotAppBar';

const Register = () => {
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
          spacing={4}
          direction="column"
          sx={{
            width: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <h1>Register</h1>

          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple">First Name</InputLabel>
            <Input id="component-simple" defaultValue=""/>
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple">Last Name</InputLabel>
            <Input id="component-simple" defaultValue=""/>
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input id="component-simple" defaultValue=""/>
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple">Phone</InputLabel>
            <Input id="component-simple" defaultValue=""/>
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="component-simple">Password</InputLabel>
            <Input id="component-simple" defaultValue=""/>
          </FormControl>

          <Stack spacing={2}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              sx={{
                width: 400,
              }}
            >
              Register
            </Button>

          </Stack>
        </Stack>

      </Stack>
      <BottomAppBar/>
    </>
  );
}

export default Register;
