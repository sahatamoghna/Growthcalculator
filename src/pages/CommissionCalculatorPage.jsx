import React from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import CommissionCalculator from '../components/CommissionCalculator'
import LogoutButton from '../components/LogoutButton'

export default function CommissionCalculatorPage({ user, onLogout }) {
  const navigate = useNavigate()
  const { username } = useParams()

  // guard: must be logged in and matching URL
  if (!user || user.username !== username) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="dashboard-topbar">
        <button
          className="dashboard-button calculator"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <LogoutButton onLogout={onLogout} />
      </div>
      <div className="commission-page" style={{ paddingTop: '4rem' }}>
        <CommissionCalculator />
      </div>
    </>
  )
}
