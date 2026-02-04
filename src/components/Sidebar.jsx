import { Link } from 'react-router-dom'
import { useSidebar } from '../App'

function Sidebar() {
  const { sidebarCollapsed } = useSidebar()

  return (
    <aside id="sidebar" className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="p-3 sidebar-header d-flex align-items-center gap-2">
        <img src="/assets/images/logo.png" className="logo" alt="logo" />
        <div className="fw-bold ms-2">MathAdventure</div>
      </div>

      <nav className="p-3">
        <Link to="/dashboard" className="nav-link d-flex align-items-center">
          <i className="bi bi-grid"></i>
          <span className="nav-text">Dashboard</span>
        </Link>

        <Link to="/customers" className="nav-link d-flex align-items-center">
          <i className="bi bi-people"></i>
          <span className="nav-text">Customers</span>
        </Link>

        <Link to="/drivers" className="nav-link d-flex align-items-center">
          <i className="bi bi-person-badge"></i>
          <span className="nav-text">Drivers</span>
        </Link>

        <Link to="/orders" className="nav-link d-flex align-items-center">
          <i className="bi bi-receipt"></i>
          <span className="nav-text">Orders</span>
        </Link>

        <Link to="/deliveries" className="nav-link d-flex align-items-center">
          <i className="bi bi-box-seam"></i>
          <span className="nav-text">Deliveries</span>
        </Link>

        <Link to="/zones" className="nav-link d-flex align-items-center">
          <i className="bi bi-geo-alt"></i>
          <span className="nav-text">Zones</span>
        </Link>

        <Link to="/reports" className="nav-link d-flex align-items-center">
          <i className="bi bi-bar-chart"></i>
          <span className="nav-text">Reports</span>
        </Link>

        <Link to="/payments" className="nav-link d-flex align-items-center">
          <i className="bi bi-credit-card"></i>
          <span className="nav-text">Payments</span>
        </Link>

        <Link to="/notifications" className="nav-link d-flex align-items-center">
          <i className="bi bi-bell"></i>
          <span className="nav-text">Notifications</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
