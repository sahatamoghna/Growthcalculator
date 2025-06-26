import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'
import MultiSelect   from '../components/MultiSelect'
import StaffReport   from '../components/StaffReport'
import {
  refereeDataMap,
  defaultRefereeData
} from '../data/refereeData'
import '../styles/referee.css'

export default function RefereePerformance({ user, onLogout }) {
  const nav = useNavigate()
  if (!user) {
    nav('/', { replace:true })
    return null
  }
  const data   = refereeDataMap[user.username] || defaultRefereeData
  const months = Array.from(new Set(data.data.map(r=>r.signUpMonth)))
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])

  return (
    <div className="referee-container">
      <div className="referee-topbar">
        <div className="referee-topbar-title">
          <h1>{data.staffName}</h1>
          <p>Code: {data.staffCode}</p>
        </div>
        <div className="referee-topbar-actions">
          <button
            className="back-button"
            onClick={()=>nav(-1)}
          >
            ← Back
          </button>
          <LogoutButton onLogout={onLogout}/>
        </div>
      </div>

      <div className="referee-controls">
        <input
          type="text"
          placeholder="Search by Remitter ID"
          className="search-input"
          value={search}
          onChange={e=>setSearch(e.target.value)}
        />
        <MultiSelect
          options={months}
          value={filter}
          onChange={setFilter}
        />
      </div>

      <div className="referee-report-container">
        <StaffReport data={data} search={search} filter={filter}/>
      </div>
    </div>
  )
}
