import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Notifications() {
  const notifications = [
    { id: 1, type: "Order", message: "New order placed by customer #1234", date: "2026-02-02 10:00", status: "Read" },
    { id: 2, type: "Delivery", message: "Delivery delayed for order #5678", date: "2026-02-02 09:30", status: "Unread" },
    { id: 3, type: "Payment", message: "Payment received for order #9012", date: "2026-02-02 08:45", status: "Read" },
    { id: 4, type: "Driver", message: "New driver registered: John Doe", date: "2026-02-01 16:20", status: "Unread" },
    { id: 5, type: "System", message: "System maintenance scheduled for tonight", date: "2026-02-01 14:00", status: "Info" }
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "Read":
        return "bg-success";
      case "Unread":
        return "bg-warning text-dark";
      case "Info":
        return "bg-info text-dark";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="admin-app">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="content">
        <Header title="Notifications" />

        <main className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Notifications</h4>

              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {notifications.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.type}</td>
                        <td>{item.message}</td>
                        <td>{item.date}</td>
                        <td>
                          <span className={`badge ${statusBadge(item.status)} px-3 py-2`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
