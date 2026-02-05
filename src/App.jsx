import { useState, createContext, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Dashboard from './pages/Dashboard';
import Problems from './pages/Problems';
import Rewards from './pages/Rewards';
import AddQuest from './pages/AddQuest';
import Customers from './pages/Customers';
import Drivers from './pages/Drivers';
import Deliveries from './pages/Deliveries';
import Orders from './pages/Orders';
import Zones from './pages/Zones';
import Notifications from './pages/Notifications';
import Payments from './pages/Payments';
import Reports from './pages/Reports';
import Login from './pages/Login';
import { AuthProvider } from './auth/AuthContext';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute';

// Sidebar context
export const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <AuthProvider>
      <SidebarContext.Provider value={{ sidebarCollapsed, toggleSidebar }}>
        <Routes>
          {/* PUBLIC ROUTE */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* PROTECTED ROUTES */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/drivers" element={<ProtectedRoute><Drivers /></ProtectedRoute>} />
          <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/problems" element={<ProtectedRoute><Problems /></ProtectedRoute>} />
          <Route path="/zones" element={<ProtectedRoute><Zones /></ProtectedRoute>} />
          <Route path="/rewards" element={<ProtectedRoute><Rewards /></ProtectedRoute>} />
          <Route path="/deliveries" element={<ProtectedRoute><Deliveries /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
          <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
          <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
          <Route path="/quests/add" element={<ProtectedRoute><AddQuest /></ProtectedRoute>} />

          {/* DEFAULT */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </SidebarContext.Provider>
    </AuthProvider>
  );
}

export default App;
