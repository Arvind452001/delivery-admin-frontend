import { useState, createContext, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Problems from './pages/Problems'
import Rewards from './pages/Rewards'
import AddLesson from './pages/AddLesson'
import AddProblem from './pages/AddProblem'
import AddQuest from './pages/AddQuest'
import Customers from './pages/Customers'
import Drivers from './pages/Drivers'
import Deliveries from './pages/Deliveries'
import Orders from './pages/Orders'
import Zones from './pages/Zones'
import Notifications from './pages/Notifications'
import Payments from './pages/Payments'
import Reports from './pages/Reports'

// Create context for sidebar state
export const SidebarContext = createContext()

export function useSidebar() {
  return useContext(SidebarContext)
}

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <SidebarContext.Provider value={{ sidebarCollapsed, toggleSidebar }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/notifications" element={<Notifications />} />
        
        <Route path="/payments" element={<Payments/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/quests/add" element={<AddQuest />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </SidebarContext.Provider>
  )
}

export default App
