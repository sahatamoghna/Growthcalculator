import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

import AdminPage from './AdminPage'
import DashboardOverview from '../components/DashboardOverview'
import LogoutButton from '../components/LogoutButton'
import { userMetrics, defaultMetrics } from '../data/metrics'

export default function Dashboard({ user, onLogout }) {
  const { username } = useParams()
  const navigate = useNavigate()

  // guard
  if (!user || user.username !== username) {
    return <Navigate to="/" replace />
  }

  // admin sees construction
  if (user.role === 'ADMIN') {
    return <AdminPage user={user} />
  }

  const metrics = userMetrics[username] || defaultMetrics

  return (
    <>
      {/* fixed top bar */}
      <div className="dashboard-topbar">
        <button
          className="dashboard-button calculator"
          onClick={() =>
            navigate(`/dashboard/${username}/calculator`)
          }
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

      {/* push content below bar */}
      <div style={{ paddingTop: '4rem' }}>
        <DashboardOverview
          user={user}
          metrics={metrics}
        />
      </div>
    </>
  )
}
