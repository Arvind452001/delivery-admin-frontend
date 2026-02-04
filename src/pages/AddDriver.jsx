'use client';

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function AddDriver() {
  const navigate = useNavigate()

  const [photoPreview, setPhotoPreview] = useState(null)
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licenseNumber: '',
    vehicleType: '',
    zone: ''
  })

  /* ---------- handlers ---------- */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setPhoto(file)

    const reader = new FileReader()
    reader.onload = (event) => setPhotoPreview(event.target.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // basic validation
    if (!formData.name || !formData.email || !formData.licenseNumber) {
      setError('Please fill all required fields')
      return
    }

    try {
      setLoading(true)

      const payload = new FormData()
      payload.append('name', formData.name)
      payload.append('email', formData.email)
      payload.append('phone', formData.phone)
      payload.append('licenseNumber', formData.licenseNumber)
      payload.append('vehicleType', formData.vehicleType)
      payload.append('zone', formData.zone)
      if (photo) payload.append('photo', photo)

      const res = await fetch('/api/drivers', {
        method: 'POST',
        body: payload
      })

      if (!res.ok) {
        throw new Error('Failed to add driver')
      }

      // success → drivers list
      navigate('/drivers')

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  /* ---------- UI ---------- */

  return (
    <div className="admin-app">
      <Sidebar />

      <div className="content">
        <Header title="Add New Driver" />

        <main className="container-fluid">
          <div className="page-section">
            <div className="card">
              <div className="card-body">

                <h5 className="mb-4">Add New Driver</h5>

                {error && (
                  <div className="alert alert-danger">{error}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">

                    {/* Photo */}
                    <div className="col-md-3 text-center mb-4">
                      <div
                        style={{
                          width: '140px',
                          height: '140px',
                          background: '#f2f2f2',
                          borderRadius: '10px',
                          margin: '0 auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden'
                        }}
                      >
                        {photoPreview ? (
                          <img src={photoPreview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <i className="bi bi-image" style={{ fontSize: '48px', color: '#ccc' }}></i>
                        )}
                      </div>

                      <div className="mt-3">
                        <input
                          type="file"
                          id="photoInput"
                          accept="image/*"
                          hidden
                          onChange={handlePhotoChange}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => document.getElementById('photoInput').click()}
                        >
                          Upload Photo
                        </button>
                      </div>
                    </div>

                    {/* Fields */}
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Full Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label">License Number *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Vehicle Type *</label>
                          <select
                            className="form-control"
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select vehicle type</option>
                            <option>Bike</option>
                            <option>Car</option>
                            <option>Van</option>
                            <option>Truck</option>
                          </select>
                        </div>

                        <div className="col-md-6 mb-3">
                          <label className="form-label">Zone *</label>
                          <select
                            className="form-control"
                            name="zone"
                            value={formData.zone}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select zone</option>
                            <option>North</option>
                            <option>South</option>
                            <option>East</option>
                            <option>West</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success" disabled={loading}>
                      {loading ? 'Saving...' : 'Add Driver'}
                    </button>

                    <Link to="/drivers" className="btn btn-outline-secondary">
                      Cancel
                    </Link>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AddDriver
