'use client';

import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Orders() {
  return (
    <div className="admin-app">
      <Sidebar />

      <div className="content">
        <Header title="Orders" />

        <main className="container-fluid">
          <div className="page-section">
            <div className="card">
              <div className="card-body">

                {/* Top bar */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Orders</h5>
                  {/* <Link to="/orders" className="btn btn-warning">
                    New order
                  </Link> */}
                </div>

                {/* Filters */}
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
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>ORD-001</td>
                        <td>Jane Doe</td>
                        <td>2024-01-15</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill">
                            Delivered
                          </span>
                        </td>
                        <td>$25.50</td>
                        <td>
                          <Link to="/orders/1" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>ORD-002</td>
                        <td>John Smith</td>
                        <td>2024-01-16</td>
                        <td>
                          <span className="badge bg-warning-subtle text-warning rounded-pill">
                            Pending
                          </span>
                        </td>
                        <td>$18.75</td>
                        <td>
                          <Link to="/orders/2" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>ORD-003</td>
                        <td>Priya Kumar</td>
                        <td>2024-01-17</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill">
                            Delivered
                          </span>
                        </td>
                        <td>$32.00</td>
                        <td>
                          <Link to="/orders/3" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>ORD-004</td>
                        <td>Aarav Patel</td>
                        <td>2024-01-18</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill">
                            Delivered
                          </span>
                        </td>
                        <td>$15.20</td>
                        <td>
                          <Link to="/orders/4" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>ORD-005</td>
                        <td>Sofia Lee</td>
                        <td>2024-01-19</td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger rounded-pill">
                            In Transit
                          </span>
                        </td>
                        <td>$28.90</td>
                        <td>
                          <Link to="/orders/5" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Orders
