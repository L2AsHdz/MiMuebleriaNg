export interface Item {
  name: string;
  amount: number;
  description: string;
}

export const Cols = [
  { field: 'name', header: 'Nombre' },
  { field: 'amount', header: 'Cantidad' },
  { field: 'description', header: 'Descripción' },
  { field: 'action', header: 'Acciones' }
];
