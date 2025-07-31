import React from 'react';
import ResponsiveAppBar from './TopAppBar';
import {Button, Container, FormControl, Grid, Input, InputLabel, List, ListItemButton, ListItemText, ListSubheader, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import BottomAppBar from './BotAppBar';
import UserNav from './UserNav';
import {GridColDef} from '@mui/x-data-grid';
          // <Grid size={4}>
          //   <h2>Your Information</h2>
          //   <p>{ user['id'] }</p>

          //   <p>{ user['first_name'] }</p>

          //   <p>{ user['last_name'] }</p>

          //   <p>{ user['email'] }</p>

          //   <p>{ user['phone'] }</p>
          // </Grid>

// import rows from './Users';
// const rows = [
//   { id: 1, first_name: 'Emily', last_name: 'Carter', email: 'emily.carter@example.com', phone: '555-123-4567'  },
// ];

// function createData(
//   id: string,
//   first_name: string,
//   last_name: string,
//   email: string,
//   phone: string,
// ) {
//   return { id, first_name, last_name, email, phone };
// }


  const user = { id: 1, first_name: 'Emily', last_name: 'Carter', email: 'emily.carter@example.com', phone: '555-123-4567'  };

// const rows = [
//   ('ID', user.id),
//   ('First Name', user.first_name),
//   ('Last Name', user.last_name),
//   ('Email', user.email),
//   ('Phone', user.phone),
// ];


const CustomerOverview = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // const user = () => {
  // const user = rows.at(0);
  // const user = { id: 1, first_name: 'Emily', last_name: 'Carter', email: 'emily.carter@example.com', phone: '555-123-4567'  };
    // rows[0];
    // return rows.at(0);
  // }

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

          {/* TODO: Create a USER FORM */}
          <Grid size={4}>
            <h2>Your Information</h2>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead> 
                  <TableRow>
                    <TableCell align="right"><b>Account Info</b></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead> 

                <TableBody>
                  <TableRow>
                    <TableCell align="right"><b>User ID</b></TableCell>
                    <TableCell align="left">{user.id}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="right"><b>First Name</b></TableCell>
                    <TableCell align="left">{user.first_name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="right"><b>Last Name</b></TableCell>
                    <TableCell align="left">{user.last_name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="right"><b>Email</b></TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="right"><b>Phone</b></TableCell>
                    <TableCell align="left">{user.phone}</TableCell>
                  </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
          </Grid>
        </Grid>
      </Stack>
      <BottomAppBar/>
    </>
  );
}

export default CustomerOverview;
