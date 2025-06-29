// src/pages/Dashboard.jsx
import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

import AdminPage from './AdminPage'
import DashboardOverview from '../components/DashboardOverview'
import LogoutButton from '../components/LogoutButton'
import { userMetrics, defaultMetrics } from '../data/metrics'

export default function Dashboard({ user, onLogout }) {
  const { username } = useParams()
  const navigate = useNavigate()

  // guard: redirect if not logged in or wrong user
  if (!user || user.username !== username) {
    return <Navigate to="/" replace />
  }

  // admin sees construction page
  if (user.role === 'ADMIN') {
    return <AdminPage user={user} />
  }

  const metrics = userMetrics[username] || defaultMetrics
  const totalCredits =
    metrics.retailAcquisitionCredits +
    metrics.retailConversionCredits +
    metrics.activeAmbassadorAcquisitionCredits +
    metrics.activeAmbassadorConversionCredits +
    metrics.businessAcquisitionCredits +
    metrics.businessConversionCredits

  return (
    <>
      <div className="dashboard-topbar">
        <div className="dashboard-topbar-left">
          <div className="dashboard-greeting">
            Hello, {user.username}
          </div>
          <div className="dashboard-total-credits">
            Total Credits: <strong>{totalCredits.toLocaleString()}</strong>
          </div>
        </div>
        <div className="dashboard-topbar-actions">
          <button
            className="dashboard-button calculator"
            onClick={() => navigate(`/dashboard/${username}/calculator`)}
          >
            Commission Calculator
          </button>
          <button
            className="dashboard-button referee"
            onClick={() => navigate('/referee-performance')}
          >
            Referee Performance
          </button>
          <LogoutButton onLogout={onLogout} />
        </div>
      </div>

      <DashboardOverview metrics={metrics} />
    </>
  )
}
