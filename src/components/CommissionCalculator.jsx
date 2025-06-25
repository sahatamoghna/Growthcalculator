import { useState, useEffect } from 'react'
import { RefreshCw } from 'lucide-react'

// ─── 1) Define all rate tables here ───────────────────────────────────────────────
const RATES = {
  BDA: {
    UK: {
      'Retail Acquisition': 20,
      'Retail Conversion': 30,
      'Active Ambassador Acquisition': 20,
      'Active Ambassador Conversion': 30,
      'Business (MTO) Acquisition': 200,
      'Business (MTO) Conversion': 800,
    },
    US: {
      'Retail Acquisition': 30,
      'Retail Conversion': 40,
      'Active Ambassador Acquisition': 30,
      'Active Ambassador Conversion': 40,
      'Business (MTO) Acquisition': 300,
      'Business (MTO) Conversion': 1000,
    },
    CA: {
      'Retail Acquisition': 40,
      'Retail Conversion': 50,
      'Active Ambassador Acquisition': 40,
      'Active Ambassador Conversion': 50,
      'Business (MTO) Acquisition': 350,
      'Business (MTO) Conversion': 1400,
    },
  },
  BDM: {
    UK: {
      'Retail Acquisition': 20,
      'Retail Conversion': 30,
      'Active Ambassador Acquisition': 20,
      'Active Ambassador Conversion': 30,
      'Business (MTO) Acquisition': 200,
      'Business (MTO) Conversion': 800,
    },
    US: {
      'Retail Acquisition': 30,
      'Retail Conversion': 40,
      'Active Ambassador Acquisition': 30,
      'Active Ambassador Conversion': 40,
      'Business (MTO) Acquisition': 300,
      'Business (MTO) Conversion': 1000,
    },
    CA: {
      'Retail Acquisition': 40,
      'Retail Conversion': 50,
      'Active Ambassador Acquisition': 40,
      'Active Ambassador Conversion': 50,
      'Business (MTO) Acquisition': 350,
      'Business (MTO) Conversion': 1400,
    },
  },
}

// ─── 2) Map region → currency ────────────────────────────────────────────────────
const CURRENCY = { UK: 'GBP', US: 'USD', CA: 'CAD' }

export default function CommissionCalculator() {
  const [role, setRole] = useState('BDA')
  const [region, setRegion] = useState('UK')
  const [referrals, setReferrals] = useState({})
  const [basePay, setBasePay] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const rates = RATES[role][region]
  const currency = CURRENCY[region]

  const handleReferralChange = (key, val) =>
    setReferrals(prev => ({ ...prev, [key]: Number(val) || 0 }))

  const handleReset = () => {
    setReferrals({})
    setBasePay('')
  }

  const salesCredits = Object.fromEntries(
    Object.entries(rates).map(([k, rate]) => [k, rate * (referrals[k] || 0)])
  )

  const totalSales = Object.values(salesCredits).reduce((a, b) => a + b, 0)
  const netBase = Number(basePay) || 0
  const commissionDue = Math.max(totalSales - netBase, 0)

  return (
    <div className="commission-page">
      <div className={`commission-card ${mounted ? 'fade-in' : ''}`}>
        <header className="commission-header">
          <h1>Commission Calculator</h1>
          <div className="controls">
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="BDA">BDA</option>
              <option value="BDM">BDM</option>
            </select>
            <span className="dash">–</span>
            <select value={region} onChange={e => setRegion(e.target.value)}>
              <option value="UK">UK</option>
              <option value="US">US</option>
              <option value="CA">CA</option>
            </select>
            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
              aria-label="Reset inputs"
            >
              <RefreshCw size={20} />
            </button>
          </div>
          <div className="legend">
            <span className="legend-swatch" /> Green fields are input cells
          </div>
        </header>

        <table className="commission-table">
          <thead>
            <tr>
              <th>Type of Referral</th>
              <th>Rate <small>({currency})</small></th>
              <th>Referrals</th>
              <th>Sales Credits <small>({currency})</small></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rates).map(([key, rate], i) => (
              <tr key={key} className={i % 2 === 0 ? 'even' : 'odd'}>
                <td>{key}</td>
                <td>{rate.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    className="referral-input"
                    value={referrals[key] ?? ''}
                    onChange={e => handleReferralChange(key, e.target.value)}
                    aria-label={`Referrals for ${key}`}
                  />
                </td>
                <td>
                  {salesCredits[key].toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="summary-container">
          <div className="summary-row total">
            <span className="summary-label">Total Sales Credits Earned:</span>
            <span className="summary-value">
              {totalSales.toLocaleString(undefined, { minimumFractionDigits: 2 })} {currency}
            </span>
          </div>

          <div className="summary-row base">
            <span className="summary-label">Base Pay (Net):</span>
            <span className="summary-value">
              <input
                type="number"
                min="0"
                className="basepay-input"
                value={basePay}
                onChange={e => setBasePay(e.target.value)}
                aria-label="Base Pay (Net)"
              />{' '}
              <span className="currency-label">{currency}</span>
            </span>
          </div>

          <div className="summary-row due">
            <span className="summary-label">Commissions Due:</span>
            <span className="summary-value">
              {commissionDue.toLocaleString(undefined, { minimumFractionDigits: 2 })} {currency}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}