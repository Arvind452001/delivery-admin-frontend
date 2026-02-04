'use client';

import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Drivers() {
  return (
    <div className="admin-app">
      <Sidebar />

      <div className="content">
        <Header title="Drivers" />

        <main className="container-fluid">
          <div className="page-section">
            <div className="card">
              <div className="card-body">

                {/* Top bar */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Drivers</h5>
                  <Link to="/Drivers" className="btn btn-warning">
                    New driver
                  </Link>
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Deliveries</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>45</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill">
                            Active
                          </span>
                        </td>
                        <td>
                          <Link to="/drivers/1" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                        <td>32</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill">
                            Active
                          </span>
                        </td>
                        <td>
                          <Link to="/drivers/2" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Mike Johnson</td>
                        <td>mike@example.com</td>
                        <td>28</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill">
                            Active
                          </span>
                        </td>
                        <td>
                          <Link to="/drivers/3" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Sarah Wilson</td>
                        <td>sarah@example.com</td>
                        <td>51</td>
                        <td>
                          <span className="badge bg-success-subtle text-success rounded-pill">
                            Active
                          </span>
                        </td>
                        <td>
                          <Link to="/drivers/4" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                        
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>David Brown</td>
                        <td>david@example.com</td>
                        <td>19</td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger rounded-pill">
                            Inactive
                          </span>
                        </td>
                        <td>
                          <Link to="/drivers/5" className="btn btn-sm btn-success me-1">
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

export default Drivers
