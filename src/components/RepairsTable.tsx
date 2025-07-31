import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Work Order ID', width: 130 },
  { field: 'status', headerName: 'Repair Status', width: 130 },
  { field: 'completed_by', headerName: 'Completion Date', width: 140 },
  { field: 'worked_by_name', headerName: 'Worker', width: 80 },
];

const rows = [
  { id: 1, status: 'WIP', completed_by: '', worked_by_name: "Elliot" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function RepairsTable() {
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
