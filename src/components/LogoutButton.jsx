// src/components/LogoutButton.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'

export default function LogoutButton({ onLogout }) {
  const navigate = useNavigate()

  const handleClick = () => {
    // 1) clear the user in your App state
    onLogout()
    // 2) navigate to "/" (your login page)
    navigate('/', { replace: true })
  }

  return (
    <button
      className="logout-button"
      onClick={handleClick}
    >
      <LogOut size={16} style={{ marginRight: '0.25rem' }} />
      Logout
    </button>
  )
}
