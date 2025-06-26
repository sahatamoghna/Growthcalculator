// src/components/DashboardOverview.jsx
import React from 'react'
import '../styles/dashboard.css'
import {
  User,
  UserPlus,
  DollarSign,
  BarChart2,
  TrendingUp,
  Users,
  Repeat
} from 'lucide-react'

// Original performance cards
const perfCards = [
  { slice: [0, 3], title: 'Last Month Performance' },
  { slice: [3, 6], title: 'Year-to-Last-Month Performance' },
]

// Card definitions for performance sections
const cards = [
  {
    key: 'newCustomerSignups',
    title: 'New Customer Sign-ups',
    icon: <UserPlus className="icon" />,
    formatter: v => v,
  },
  {
    key: 'remittedByNewCustomers',
    title: 'Remittance by New Customers',
    icon: <DollarSign className="icon" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
  {
    key: 'totalRemittedPrevMonth',
    title: 'Total Customer Remittance',
    icon: <BarChart2 className="icon" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
  {
    key: 'totalCustomerSignups',
    title: 'Customer Sign-ups',
    icon: <Users className="icon" />,
    formatter: v => v,
  },
  {
    key: 'totalRemittedByNewCustomers',
    title: 'Remittance by New Customers',
    icon: <TrendingUp className="icon" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
  {
    key: 'totalRemittedAllCustomers',
    title: 'Total Customer Remittance',
    icon: <DollarSign className="icon" />,
    formatter: v => `$${v.toLocaleString('en-US')}`,
  },
]

// Sales‐Credits cards: acquisitions = UserPlus, conversions = Repeat
const creditCards = [
  {
    keyCount: 'retailAcquisitionCount',
    keyCredit: 'retailAcquisitionCredits',
    title: 'Retail Acquisition',
    icon: <UserPlus className="icon" />,
  },
  {
    keyCount: 'retailConversionCount',
    keyCredit: 'retailConversionCredits',
    title: 'Retail Conversion',
    icon: <Repeat className="icon" />,
  },
  {
    keyCount: 'activeAmbassadorAcquisitionCount',
    keyCredit: 'activeAmbassadorAcquisitionCredits',
    title: 'Ambassador Acquisition',
    icon: <UserPlus className="icon" />,
  },
  {
    keyCount: 'activeAmbassadorConversionCount',
    keyCredit: 'activeAmbassadorConversionCredits',
    title: 'Ambassador Conversion',
    icon: <Repeat className="icon" />,
  },
  {
    keyCount: 'businessAcquisitionCount',
    keyCredit: 'businessAcquisitionCredits',
    title: 'Business (MTO) Acquisition',
    icon: <UserPlus className="icon" />,
  },
  {
    keyCount: 'businessConversionCount',
    keyCredit: 'businessConversionCredits',
    title: 'Business (MTO) Conversion',
    icon: <Repeat className="icon" />,
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
        <User className="icon-large" />
        <h2>
          Hello, {user.username}{' '}
          <span className="id">(ID: {user.id})</span>
        </h2>
      </div>

      {/* 1) Sales Credits in single parent card */}
      <h3 className="dashboard-section-title">Last Month Sales Credits</h3>
      <div className="sales-credits-parent-card">
        <div className="sales-credits-grid">
          {creditCards.map(({ keyCount, keyCredit, title, icon }) => (
            <div key={keyCount} className="sales-credits-item">
              <div className="dashboard-card-icon">{icon}</div>
              <div className="dashboard-card-title">{title}</div>
              <div className="dashboard-card-value">
                {metrics[keyCount]}
              </div>
              <div className="dashboard-card-subvalue">
                ${metrics[keyCredit].toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2) Performance Sections */}
      {perfCards.map(({ slice, title }) => (
        <React.Fragment key={title}>
          <h3 className="dashboard-section-title">{title}</h3>
          <div className="dashboard-grid">
            {cards.slice(...slice).map(({ key, title, icon, formatter }) => (
              <div key={key} className="dashboard-card">
                <div className="dashboard-card-icon">{icon}</div>
                <div className="dashboard-card-title">{title}</div>
                <div className="dashboard-card-value">
                  {formatter(metrics[key])}
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}

      {/* 3) Action Buttons */}
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
