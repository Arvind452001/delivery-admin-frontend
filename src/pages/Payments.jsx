'use client';

import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Payments() {
  const payments = [
    {
      id: 1,
      transactionId: 'TXN-001',
      customer: 'Jane Doe',
      amount: 25.5,
      date: '2024-01-15',
      status: 'Completed',
    },
    {
      id: 2,
      transactionId: 'TXN-002',
      customer: 'John Smith',
      amount: 18.75,
      date: '2024-01-16',
      status: 'Completed',
    },
    {
      id: 3,
      transactionId: 'TXN-003',
      customer: 'Priya Kumar',
      amount: 32.0,
      date: '2024-01-17',
      status: 'Pending',
    },
    {
      id: 4,
      transactionId: 'TXN-004',
      customer: 'Aarav Patel',
      amount: 15.2,
      date: '2024-01-18',
      status: 'Completed',
    },
    {
      id: 5,
      transactionId: 'TXN-005',
      customer: 'Sofia Lee',
      amount: 28.9,
      date: '2024-01-19',
      status: 'Completed',
    },
    {
      id: 6,
      transactionId: 'TXN-006',
      customer: 'Mohit Singh',
      amount: 22.45,
      date: '2024-01-20',
      status: 'Failed',
    },
  ];

  return (
    <div className="admin-app">
      <Sidebar />

      <div className="content">
        <Header title="Payments" />

        <main className="container-fluid">
          <div className="page-section">
            <div className="card">
              <div className="card-body">

                {/* Top bar */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Payments List</h5>
                </div>

                {/* Filters (UI only) */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <select className="form-select form-select-sm d-inline w-auto me-2">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    <span> entries per page</span>
                  </div>

                  <input
                    type="text"
                    className="form-control form-control-sm w-25"
                    placeholder="Search..."
                  />
                </div>

                {/* Table */}
                <div className="table-responsive">
                  <table className="table datatable">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Transaction ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {payments.map((p, index) => (
                        <tr key={p.id}>
                          <td>{index + 1}</td>
                          <td>{p.transactionId}</td>
                          <td>{p.customer}</td>
                          <td>${p.amount.toFixed(2)}</td>
                          <td>{p.date}</td>
                          <td>
                            <span
                              className={`badge rounded-pill ${
                                p.status === 'Completed'
                                  ? 'bg-success-subtle text-success'
                                  : p.status === 'Pending'
                                  ? 'bg-warning-subtle text-warning'
                                  : 'bg-danger-subtle text-danger'
                              }`}
                            >
                              {p.status}
                            </span>
                          </td>
                          <td>
                            <Link
                              to={`/payments/${p.id}`}
                              className="btn btn-sm btn-primary"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Payments;
