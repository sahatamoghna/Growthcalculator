import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import CommissionCalculator from './pages/CommissionCalculator'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="app-container">
      <button
        className="logout-button"
        onClick={() => setIsLoggedIn(false)}
      >
        Logout
      </button>
      <CommissionCalculator />
    </div>
  )
}
