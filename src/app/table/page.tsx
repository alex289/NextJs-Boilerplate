import { columns } from './columns';
import { DataTable } from './data-table';

import type { Payment } from './columns';

const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  // ...
];

export default function Table() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
