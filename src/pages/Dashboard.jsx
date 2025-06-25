// src/pages/Dashboard.jsx
import React, { useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

import AdminPage            from './AdminPage'
import CommissionCalculator from '../components/CommissionCalculator'
import LogoutButton         from '../components/LogoutButton'
import DashboardOverview    from '../components/DashboardOverview'
import { userMetrics, defaultMetrics } from '../data/metrics'

export default function Dashboard({ user, onLogout }) {
  const { username } = useParams()
  const navigate = useNavigate()
  const [showCalculator, setShowCalculator] = useState(false)

  // If not logged in or URL mismatch, go to login
  if (!user || user.username !== username) {
    return <Navigate to="/" replace />
  }

  // If admin logs in, show under‐construction page
  if (user.role === 'ADMIN') {
    return <AdminPage user={user} />
  }

  // Otherwise, show normal dashboard for BDA/BDM
  const metrics = userMetrics[username] || defaultMetrics

  return (
    <>
      <LogoutButton onLogout={onLogout} />

      <DashboardOverview
        user={user}
        metrics={metrics}
        showCalculator={showCalculator}
        onShowCalculator={() => setShowCalculator(prev => !prev)}
        onShowReferee={() => navigate('/referee-performance')}
      />

      {showCalculator && (
        <div className="px-6 pb-8">
          <CommissionCalculator />
        </div>
      )}
    </>
  )
}
