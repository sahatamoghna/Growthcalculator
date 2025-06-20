import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import CommissionCalculator from './pages/CommissionCalculator'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn
    ? <CommissionCalculator />
    : <LoginPage onLogin={() => setIsLoggedIn(true)} />
}
