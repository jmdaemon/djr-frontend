import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Customer ID', width: 130 },
  { field: 'first_name', headerName: 'First Name', width: 130 },
  { field: 'last_name', headerName: 'Last Name', width: 140 },
  { field: 'email', headerName: 'Email', width: 140 },
  { field: 'phone', headerName: 'Phone', width: 140 },
];

const rows = [
  { id: 1, first_name: 'Emily', last_name: 'Carter', email: 'emily.carter@example.com', phone: '555-123-4567'  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function CustomersTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
