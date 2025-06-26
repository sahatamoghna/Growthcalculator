import React from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import CommissionCalculator from '../components/CommissionCalculator'
import LogoutButton from '../components/LogoutButton'

export default function CommissionCalculatorPage({ user, onLogout }) {
  const navigate = useNavigate()
  const { username } = useParams()

  if (!user || user.username !== username) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="dashboard-topbar">
        {/* 7. Empty flex item to push buttons right */}
        <div style={{ flex: 1 }} />
        <div className="dashboard-topbar-actions">
          <button
            className="back-button"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <LogoutButton onLogout={onLogout} />
        </div>
      </div>
      <div className="commission-page" style={{ paddingTop: '4rem' }}>
        <CommissionCalculator />
      </div>
    </>
  )
}
