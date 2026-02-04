'use client';

import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Zones() {

  return (
    <div className="admin-app">
      <Sidebar />

      <div className="content">
        <Header title="Zones" />

        <main className="container-fluid">
          <div className="page-section">
            <div className="card">
              <div className="card-body">

                {/* ===== Top Bar ===== */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Zones</h5>
                  <div>
                    <Link to="/zones/add" className="btn btn-warning">
                      New zone
                    </Link>
                  </div>
                </div>

                {/* ===== Filters ===== */}
                <div className="row mb-3">
                  <div className="col-md-2">
                    <select className="form-select">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>

                {/* ===== Table ===== */}
                <div className="table-responsive">
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Zone Name</th>
                        <th>Manager</th>
                        <th>Drivers</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Zone A</td>
                        <td>John Manager</td>
                        <td>5</td>
                        <td><span className="status-active">Active</span></td>
                        <td>
                          <Link to="/zones/1" className="btn btn-sm btn-success me-2">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Zone B</td>
                        <td>Jane Supervisor</td>
                        <td>3</td>
                        <td><span className="status-active">Active</span></td>
                        <td>
                          <Link to="/zones/2" className="btn btn-sm btn-success me-2">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Zone C</td>
                        <td>Mike Lead</td>
                        <td>4</td>
                        <td><span className="status-active">Active</span></td>
                        <td>
                          <Link to="/zones/3" className="btn btn-sm btn-success me-2">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Zone D</td>
                        <td>Sarah Head</td>
                        <td>2</td>
                        <td><span className="status-block">Inactive</span></td>
                        <td>
                          <Link to="/zones/4" className="btn btn-sm btn-success me-2">
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

                <div className="text-muted">
                  Showing 1 to 4 of 4 entries
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Zones
