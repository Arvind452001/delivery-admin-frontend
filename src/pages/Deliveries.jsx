"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 API ready – later replace with real API
    // fetch('/api/deliveries')
    //   .then(res => res.json())
    //   .then(data => setDeliveries(data))

    // 🔹 Dummy data for now
    const dummyData = [
      {
        id: 1,
        deliveryId: "DEL-001",
        orderId: "ORD-001",
        driver: "John Doe",
        status: "Delivered",
        date: "2024-01-15",
      },
      {
        id: 2,
        deliveryId: "DEL-002",
        orderId: "ORD-002",
        driver: "Jane Smith",
        status: "In Transit",
        date: "2024-01-16",
      },
      {
        id: 3,
        deliveryId: "DEL-003",
        orderId: "ORD-003",
        driver: "Mike Johnson",
        status: "Delivered",
        date: "2024-01-17",
      },
      {
        id: 4,
        deliveryId: "DEL-004",
        orderId: "ORD-004",
        driver: "Sarah Wilson",
        status: "Delivered",
        date: "2024-01-18",
      },
      {
        id: 5,
        deliveryId: "DEL-005",
        orderId: "ORD-005",
        driver: "David Brown",
        status: "Pending",
        date: "2024-01-19",
      },
    ];

    setTimeout(() => {
      setDeliveries(dummyData);
      setLoading(false);
    }, 500);
  }, []);

  const renderStatus = (status) => {
    if (status === "Delivered") {
      return (
        <span className="badge bg-success-subtle text-success rounded-pill">
          Delivered
        </span>
      );
    }
    if (status === "In Transit") {
      return (
        <span className="badge bg-warning-subtle text-warning rounded-pill">
          In Transit
        </span>
      );
    }
    return (
      <span className="badge bg-danger-subtle text-danger rounded-pill">
        Pending
      </span>
    );
  };

  return (
    <div className="admin-app">
      <Sidebar />

      <div className="content">
        <Header title="Deliveries" />

        <main className="container-fluid">
          <div className="page-section">
            <div className="card">
              <div className="card-body">
                {/* Top bar */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Deliveries</h5>
                  {/* <Link to="/deliveries" className="btn btn-warning">
                    New delivery
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
                        <th>Delivery ID</th>
                        <th>Order</th>
                        <th>Driver</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="7" className="text-center py-4">
                            Loading deliveries...
                          </td>
                        </tr>
                      ) : (
                        deliveries.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.deliveryId}</td>
                            <td>{item.orderId}</td>
                            <td>{item.driver}</td>
                            <td>{renderStatus(item.status)}</td>
                            <td>{item.date}</td>
                            <td>
                              <Link
                                // to={`/deliveries/${item.id}`}
                                className={`btn btn-sm me-1 ${item.isActive ? "btn-success" : "btn-secondary"}`}
                              >
                                <i
                                  className={`bi ${item.isActive ? "bi-toggle-on" : "bi-toggle-off"}`}
                                ></i>
                              </Link>

                              <button className="btn btn-sm btn-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
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

export default Deliveries;
