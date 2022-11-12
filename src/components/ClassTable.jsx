import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '순번', width: 70 },
  { field: 'className', headerName: '강의명', width: 130 },
  { field: 'instructor', headerName: '강사', width: 130 },
  {
    field: 'classFee',
    headerName: '수업료',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, instructor: '김주원', className: '쭈워니 노래교실', classFee: 50000 },
  { id: 2, instructor: '야망남', className: '야망남 댄스교실', classFee: 30000 },
  { id: 3, instructor: '최현정', className: '현정이 롤체교실', classFee: 100000 },
  { id: 4, instructor: '김인철', className: '인철이 박스교실', classFee: 100 },
  { id: 5, instructor: '홍성민', className: '성미니 음주교실', classFee: 50000 },
  { id: 6, instructor: 'Melisandre', className: null, classFee: 150 },
  { id: 7, instructor: 'Clifford', className: 'Ferrara', classFee: 44 },
  { id: 8, instructor: 'Frances', className: 'Rossini', classFee: 36 },
  { id: 9, instructor: 'Roxie', className: 'Harvey', classFee: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
