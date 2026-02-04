'use client';

import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Customers() {
  return (
    <div className="admin-app">
      <Sidebar />

      <div className="content">
        <Header title="Customers" />

        <main className="container-fluid">
          <div className="page-section">
            <div className="card">
              <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Customers</h5>
                  <Link to="/customers" className="btn btn-primary">
                    <i className="bi bi-plus-lg me-1"></i>
                    New Customer
                  </Link>
                </div>

                <div className="table-responsive">
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Total Orders</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Alan Walker</td>
                        <td>alan@example.com</td>
                        <td>12</td>
                        <td>
                          <Link to="/customers/1" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Neha Sharma</td>
                        <td>neha@example.com</td>
                        <td>8</td>
                        <td>
                          <Link to="/customers/2" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Rahul Verma</td>
                        <td>rahul@example.com</td>
                        <td>5</td>
                        <td>
                          <Link to="/customers/3" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Meera Iyer</td>
                        <td>meera@example.com</td>
                        <td>15</td>
                        <td>
                          <Link to="/customers/4" className="btn btn-sm btn-success me-1">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>Kumar Singh</td>
                        <td>kumar@example.com</td>
                        <td>3</td>
                        <td>
                          <Link to="/customers/5" className="btn btn-sm btn-success me-1">
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

export default Customers
