import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import RefereePerformance from './pages/RefereePerformance'
import CommissionCalculatorPage from './pages/CommissionCalculatorPage'

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={u => setCurrentUser(u)} />} />
        <Route path="/login" element={<LoginPage onLogin={u => setCurrentUser(u)} />} />

        <Route
          path="/dashboard/:username"
          element={
            <Dashboard
              user={currentUser}
              onLogout={() => setCurrentUser(null)}
            />
          }
        />

        <Route
          path="/dashboard/:username/calculator"
          element={
            <CommissionCalculatorPage
              user={currentUser}
              onLogout={() => setCurrentUser(null)}
            />
          }
        />

        <Route
          path="/referee-performance"
          element={
            <RefereePerformance
              user={currentUser}
              onLogout={() => setCurrentUser(null)}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
