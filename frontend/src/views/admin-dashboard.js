import React from 'react'
import { Helmet } from 'react-helmet'
import './admin-dashboard.css'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <Helmet>
        <title>Admin Dashboard - AI Research Hubs</title>
        <meta property="og:title" content="Admin Dashboard - AI Research Hubs" />
      </Helmet>
      <header className="admin-dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage users, payments, and content.</p>
      </header>
      <section className="admin-dashboard-content">
        <div className="admin-dashboard-section">
          <h2>User Management</h2>
          <p>View and manage all users.</p>
          {/* Placeholder for user management functionality */}
        </div>
        <div className="admin-dashboard-section">
          <h2>Payment Management</h2>
          <p>View and manage all payments.</p>
          {/* Placeholder for payment management functionality */}
        </div>
        <div className="admin-dashboard-section">
          <h2>Content Management</h2>
          <p>View and manage all content.</p>
          {/* Placeholder for content management functionality */}
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard
