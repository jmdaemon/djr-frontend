import React from 'react';
import ResponsiveAppBar from './TopAppBar';
import {Button, FormControl, Input, InputLabel, Stack, TextareaAutosize} from '@mui/material';
import BottomAppBar from './BotAppBar';
import {Link} from 'react-router-dom';

const ServiceRequest = () => {
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

          <h1>Request Device Repairs</h1>
          

          {/* <FormControl variant="standard" fullWidth> */}
          {/* <InputLabel htmlFor="component-simple">Device Issue </InputLabel> */}
            {/* <h2>Device Issue</h2> */}
          {/* </FormControl> */}

            <p>
              Describe your device issues. Include as many relevant
            details as possible to describe your device's issue.
            </p>

            <TextareaAutosize
              id='input-description'
              aria-label="minimum height"
              minRows={10}
              placeholder="E.g won't boot, makes beeping noise after power-on"
              style={{ width:400 }}
            />
          
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
                Submit
              </Button>
            </Link>

          </Stack>
        </Stack>

      </Stack>
      <BottomAppBar/>
    </>
  );
}

export default ServiceRequest;
