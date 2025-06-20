import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'
import logo from '../assets/logo.png'

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (username === 'payangel' && password === 'growth') {
      onLogin()
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-page">
      <img src={logo} alt="PayAngel" className="logo" />

      <div className="login-card">
        <h1 className="title">Welcome</h1>
        <p className="subtitle">
          Please enter your username and password
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-group">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className="toggle-visibility"
              onClick={() => setShowPassword(v => !v)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="login-button">
            <Lock size={20} style={{ marginRight: '0.5rem' }} />
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
