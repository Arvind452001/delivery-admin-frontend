import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  useEffect(() => {
    const initCharts = () => {
      if (typeof Chart !== "undefined") {
        /* Horizontal bar – Orders & Deliveries */
        const barCanvas = document.getElementById("barChart");
        if (barCanvas && !barCanvas.dataset.chartInit) {
          const barCtx = barCanvas.getContext("2d");
          new Chart(barCtx, {
            type: "bar",
            data: {
              labels: ["Zone A", "Zone B", "Zone C"],
              datasets: [
                {
                  label: "Orders",
                  data: [420, 560, 380],
                  backgroundColor: "#ffce08",
                  borderColor: "#ffce08",
                  borderWidth: 1,
                  borderRadius: 8,
                  barPercentage: 0.7,
                },
                {
                  label: "Deliveries",
                  data: [400, 520, 350],
                  backgroundColor: "#00305c",
                  borderColor: "#00305c",
                  borderWidth: 1,
                  borderRadius: 8,
                  barPercentage: 0.7,
                },
              ],
            },
            options: {
              indexAxis: "y",
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "top" },
                tooltip: {
                  padding: 12,
                  borderRadius: 6,
                  backgroundColor: "rgba(0,0,0,0.8)",
                },
              },
              scales: {
                x: { beginAtZero: true, grid: { color: "rgba(0,0,0,0.05)" } },
                y: { grid: { display: false } },
              },
            },
          });
          barCanvas.dataset.chartInit = "1";
        }

        /* Donut – Order Status */
        const donutCanvas = document.getElementById("donutChart");
        if (donutCanvas && !donutCanvas.dataset.chartInit) {
          const donutCtx = donutCanvas.getContext("2d");
          new Chart(donutCtx, {
            type: "doughnut",
            data: {
              labels: ["Delivered", "In Transit", "Pending"],
              datasets: [
                {
                  data: [65, 25, 10],
                  backgroundColor: ["#ffc107", "#00305c", "#d4a5b4"],
                  borderColor: "#ffffff",
                  borderWidth: 3,
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              plugins: {
                legend: { position: "bottom", padding: 20 },
                tooltip: {
                  padding: 12,
                  borderRadius: 6,
                  backgroundColor: "rgba(0,0,0,0.8)",
                },
              },
            },
          });
          donutCanvas.dataset.chartInit = "1";
        }
      }
    };

    setTimeout(initCharts, 300);
  }, []);

  return (
    <div className="admin-app">
      <Sidebar />
      <div className="content">
        <Header title="Dashboard" />

        <main className="container-fluid">
          {/* Stats (text only changed) */}
          <div className="row g-3 mb-3">
            {[
              {
                title: "Total Orders",
                value: "1,248",
                change: "↑ 12% from last month",
                icon: "bi-receipt",
              },
              {
                title: "Pending Deliveries",
                value: "342",
                change: "↑ 8% from last month",
                icon: "bi-box",
              },
              {
                title: "Active Drivers",
                value: "4,120",
                change: "↑ 24% from last month",
                icon: "bi-truck",
              },
              {
                title: "Total Revenue",
                value: "$567K",
                change: "↑ 5% from last month",
                icon: "bi-credit-card",
              },
            ].map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "20px 22px",
                    border: "3px solid #fff3cd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Left Content */}
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#111",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </div>

                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#000",
                        lineHeight: "1.2",
                      }}
                    >
                      {item.value}
                    </div>

                    <div
                      style={{
                        fontSize: "13px",
                        color: "#b0b0b0",
                        marginTop: "6px",
                      }}
                    >
                      {item.change}
                    </div>
                  </div>

                  {/* Right Icon */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#ffcc00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{ fontSize: "20px", color: "#000" }}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts (unchanged UI) */}
          <div className="row g-3 mb-3">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">
                    Orders & Deliveries Overview
                  </h5>
                  <div style={{ height: "320px" }}>
                    <canvas id="barChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Order Status</h5>
                  <div style={{ height: "320px" }}>
                    <canvas id="donutChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tables */}
          <div className="row g-3">
            {/* Top Drivers */}
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-3">Top Drivers</h5>

                  {/* Driver 1 */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{
                          width: 40,
                          height: 40,
                          background: "linear-gradient(135deg,#ffce08,#2f4f2f)",
                        }}
                      >
                        JD
                      </div>
                      <div>
                        <div className="fw-semibold">John Doe</div>
                        <small className="text-muted">Zone A</small>
                      </div>
                    </div>
                    <div className="fw-bold text-danger">98%</div>
                  </div>

                  {/* Driver 2 */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{
                          width: 40,
                          height: 40,
                          background: "linear-gradient(135deg,#ffce08,#2f4f2f)",
                        }}
                      >
                        JS
                      </div>
                      <div>
                        <div className="fw-semibold">Jane Smith</div>
                        <small className="text-muted">Zone B</small>
                      </div>
                    </div>
                    <div className="fw-bold text-danger">95%</div>
                  </div>

                  {/* Driver 3 */}
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{
                          width: 40,
                          height: 40,
                          background: "linear-gradient(135deg,#ffce08,#2f4f2f)",
                        }}
                      >
                        RM
                      </div>
                      <div>
                        <div className="fw-semibold">Robert Miller</div>
                        <small className="text-muted">Zone C</small>
                      </div>
                    </div>
                    <div className="fw-bold text-danger">92%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Deliveries */}
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-3">Recent Deliveries</h5>

                  <div className="d-flex gap-3 mb-3">
                    <div className="d-flex flex-column align-items-center">
                      <span
                        className="rounded-circle bg-danger"
                        style={{ width: 8, height: 8 }}
                      ></span>
                      <span className="flex-grow-1 border-start mt-1"></span>
                    </div>
                    <div>
                      <div className="fw-semibold">
                        Order #1234 delivered successfully
                      </div>
                      <small className="text-muted">2 hours ago</small>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-3">
                    <div className="d-flex flex-column align-items-center">
                      <span
                        className="rounded-circle bg-primary"
                        style={{ width: 8, height: 8 }}
                      ></span>
                      <span className="flex-grow-1 border-start mt-1"></span>
                    </div>
                    <div>
                      <div className="fw-semibold">
                        New driver assigned to Zone B
                      </div>
                      <small className="text-muted">4 hours ago</small>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <div className="d-flex flex-column align-items-center">
                      <span
                        className="rounded-circle bg-danger"
                        style={{ width: 8, height: 8 }}
                      ></span>
                    </div>
                    <div>
                      <div className="fw-semibold">
                        Payment processed for Order #5678
                      </div>
                      <small className="text-muted">6 hours ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
