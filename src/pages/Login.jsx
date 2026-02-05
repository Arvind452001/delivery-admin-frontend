'use client';

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        padding: '1rem',
      }}
    >
      <div
        className="card shadow"
        style={{
          backgroundColor: '#E59A3A',
          width: '100%',
          maxWidth: '420px',
          borderRadius: '16px',
          padding: '1.5rem',
          border: 'none',
        }}
      >
        <div className="card-body p-4">
          {/* Logo */}
          <div className="text-center mb-3">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              style={{ width: '140px' }}
            />
          </div>

          {/* Title */}
          <h4
            className="text-center mb-4"
            style={{ fontWeight: '700', color: '#000' }}
          >
            Admin Login
          </h4>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label
                className="form-label"
                style={{ fontWeight: 500, color: '#000' }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="admin@example.com"
                style={{
                  borderRadius: '10px',
                  padding: '10px 12px',
                  border: 'none',
                }}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label"
                style={{ fontWeight: 500, color: '#000' }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••"
                style={{
                  borderRadius: '10px',
                  padding: '10px 12px',
                  border: 'none',
                }}
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              style={{
                backgroundColor: '#FFD000',
                color: '#000',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 22px',
                fontWeight: '600',
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
