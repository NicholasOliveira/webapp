import * as React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { isNumber } from 'util';

const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 160 },
  {
    field: 'date',
    headerName: 'Data',
    width: 160,
  },
  {
    field: 'entrada',
    headerName: 'Entrada',
    width: 160,
  },
  {
    field: 'almoco',
    headerName: 'Almoço',
    width: 160,
  },
  {
    field: 'saida',
    headerName: 'Saída',
    width: 160,
  },
];

export default function DataTable({ Data }: any) {
  const opt = ['entrada', 'almoco', 'saida', 'date'];
  Data = Data.map((data: any) => {
    for (let i = 0; i < 5; i++) {
      data[opt[i]] = isNumber(data[opt[i]])
        ? new Date(data[opt[i]]).toLocaleTimeString('pt-BR')
        : data[opt[i]];
    }
    return data;
  });
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={Data} columns={columns} pageSize={10} />
    </div>
  );
}
