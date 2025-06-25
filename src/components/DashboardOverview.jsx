// src/components/DashboardOverview.jsx
import React from 'react'
import '../styles/dashboard.css'
import {
  User,
  UserPlus,
  DollarSign,
  BarChart2,
  TrendingUp,
  Users
} from 'lucide-react'

// Card definitions (titles omit timeframe)
const cards = [
  {
    key: 'newCustomerSignups',
    title: 'New Customer Sign-ups',
    icon: <UserPlus className="w-6 h-6 text-green-500" />,
    formatter: v => v,
  },
  {
    key: 'remittedByNewCustomers',
    title: 'Remittance by New Customers',
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
  {
    key: 'totalRemittedPrevMonth',
    title: 'Total Customer Remittance',
    icon: <BarChart2 className="w-6 h-6 text-green-500" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
  {
    key: 'totalCustomerSignups',
    title: 'Customer Sign-ups',
    icon: <Users className="w-6 h-6 text-blue-500" />,
    formatter: v => v,
  },
  {
    key: 'totalRemittedByNewCustomers',
    title: 'Remittance by New Customers',
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
  {
    key: 'totalRemittedAllCustomers',
    title: 'Total Customer Remittance',
    icon: <DollarSign className="w-6 h-6 text-blue-500" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
]

export default function DashboardOverview({
  user,
  metrics,
  showCalculator,
  onShowCalculator,
  onShowReferee
}) {
  return (
    <div className="dashboard-overview">
      {/* Greeting */}
      <div className="dashboard-greeting">
        <User className="w-8 h-8 text-gray-600" />
        <h2>
          Hello, {user.username}{' '}
          <span className="id">(ID: {user.id})</span>
        </h2>
      </div>

      {/* Last Month Performance */}
      <h3 className="dashboard-section-title">Last Month Performance</h3>
      <div className="dashboard-grid">
        {cards.slice(0, 3).map(({ key, title, icon, formatter }) => (
          <div key={key} className="dashboard-card">
            <div className="dashboard-card-icon">{icon}</div>
            <div className="dashboard-card-title">{title}</div>
            <div className="dashboard-card-value">
              {formatter(metrics[key])}
            </div>
          </div>
        ))}
      </div>

      {/* Year-to-Last-Month Performance */}
      <h3 className="dashboard-section-title">Year-to-Last-Month Performance</h3>
      <div className="dashboard-grid">
        {cards.slice(3).map(({ key, title, icon, formatter }) => (
          <div key={key} className="dashboard-card">
            <div className="dashboard-card-icon">{icon}</div>
            <div className="dashboard-card-title">{title}</div>
            <div className="dashboard-card-value">
              {formatter(metrics[key])}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="dashboard-actions">
        <button
          onClick={onShowCalculator}
          className="dashboard-button calculator"
        >
          {showCalculator ? 'Hide Calculator' : 'Show Commission Calculator'}
        </button>
        <button
          onClick={onShowReferee}
          className="dashboard-button referee"
        >
          Show Referee Performance
        </button>
      </div>
    </div>
  )
}
