// src/components/MultiSelect.jsx
import React, { useState, useRef, useEffect } from 'react'
import '../styles/referee.css'

export default function MultiSelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  // close when clicking outside
  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // toggle one option
  const toggleOpt = opt => {
    if (value.includes(opt)) onChange(value.filter(v => v!==opt))
    else onChange([...value, opt])
  }

  // “Clear All” = select none = show all
  const clearAll = () => {
    onChange([])
  }

  const label = value.length === 0
    ? 'All Sign-up Months'
    : `${value.length} selected`

  return (
    <div className="multi-select" ref={ref}>
      <button
        type="button"
        className="multi-select-btn"
        onClick={()=>setOpen(o=>!o)}
      >
        <span>{label}</span>
        <span>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="multi-select-dropdown">
          <div
            className="multi-select-option"
            onClick={clearAll}
            style={{ fontWeight:'600', borderBottom:'1px solid #eee' }}
          >
            Clear All
          </div>
          {options.map(opt=>(
            <label key={opt} className="multi-select-option">
              <input
                type="checkbox"
                checked={value.includes(opt)}
                onChange={()=>toggleOpt(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}
