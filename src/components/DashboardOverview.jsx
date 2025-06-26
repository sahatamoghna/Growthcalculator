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

export default function DashboardOverview({ user, metrics }) {
  // pull out flat sales fields
  const {
    retailAcquisitionCount,
    retailAcquisitionCredits,
    retailConversionCount,
    retailConversionCredits,

    activeAmbassadorAcquisitionCount,
    activeAmbassadorAcquisitionCredits,
    activeAmbassadorConversionCount,
    activeAmbassadorConversionCredits,

    businessAcquisitionCount,
    businessAcquisitionCredits,
    businessConversionCount,
    businessConversionCredits
  } = metrics

  // compute total credits
  const totalCredits =
    retailAcquisitionCredits +
    retailConversionCredits +
    activeAmbassadorAcquisitionCredits +
    activeAmbassadorConversionCredits +
    businessAcquisitionCredits +
    businessConversionCredits

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

      {/* Total Credits as text */}
      <div className="dashboard-total-credits">
        Total Credits:<strong> ${totalCredits.toLocaleString()}</strong>
      </div>

      {/* Last Month Sales Credits */}
      <h3 className="dashboard-section-title">Last Month Sales Credits</h3>
      <div className="sales-credits-parent-card">
        <div className="sales-credits-grid">
          <div className="empty-cell" />
          <div className="sales-credits-header">Retail</div>
          <div className="sales-credits-header">Ambassador</div>
          <div className="sales-credits-header">Business (MTO)</div>

          <div className="sales-credits-row-title">Acquisition</div>
          <div className="sales-credit-cell-card">
            <div className="sales-card-amount">
              ${retailAcquisitionCredits.toLocaleString()}
            </div>
            <div className="sales-card-count">
              {retailAcquisitionCount}
            </div>
          </div>
          <div className="sales-credit-cell-card">
            <div className="sales-card-amount">
              ${activeAmbassadorAcquisitionCredits.toLocaleString()}
            </div>
            <div className="sales-card-count">
              {activeAmbassadorAcquisitionCount}
            </div>
          </div>
          <div className="sales-credit-cell-card">
            <div className="sales-card-amount">
              ${businessAcquisitionCredits.toLocaleString()}
            </div>
            <div className="sales-card-count">
              {businessAcquisitionCount}
            </div>
          </div>

          <div className="sales-credits-row-title">Conversion</div>
          <div className="sales-credit-cell-card">
            <div className="sales-card-amount">
              ${retailConversionCredits.toLocaleString()}
            </div>
            <div className="sales-card-count">
              {retailConversionCount}
            </div>
          </div>
          <div className="sales-credit-cell-card">
            <div className="sales-card-amount">
              ${activeAmbassadorConversionCredits.toLocaleString()}
            </div>
            <div className="sales-card-count">
              {activeAmbassadorConversionCount}
            </div>
          </div>
          <div className="sales-credit-cell-card">
            <div className="sales-card-amount">
              ${businessConversionCredits.toLocaleString()}
            </div>
            <div className="sales-card-count">
              {businessConversionCount}
            </div>
          </div>
        </div>
      </div>

      {/* Last Month Performance */}
      <h3 className="dashboard-section-title">Last Month Performance</h3>
      <div className="sales-credits-parent-card">
        <div className="dashboard-grid">
          {[
            {
              icon: <UserPlus className="icon"/>,
              title: 'New Customer Sign-ups',
              value: metrics.newCustomerSignups
            },
            {
              icon: <DollarSign className="icon"/>,
              title: 'Remittance by New Customers',
              value: `$${metrics.remittedByNewCustomers.toLocaleString()}`
            },
            {
              icon: <BarChart2 className="icon"/>,
              title: 'Total Customer Remittance',
              value: `$${metrics.totalRemittedPrevMonth.toLocaleString()}`
            }
          ].map((c, i) => (
            <div key={i} className="dashboard-card">
              <div className="dashboard-card-icon">{c.icon}</div>
              <div className="dashboard-card-title">{c.title}</div>
              <div className="dashboard-card-value">{c.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Year-to-Last-Month Performance */}
      <h3 className="dashboard-section-title">
        Year-to-Last-Month Performance
      </h3>
      <div className="sales-credits-parent-card">
        <div className="dashboard-grid">
          {[
            {
              icon: <Users className="icon"/>,
              title: 'Customer Sign-ups',
              value: metrics.totalCustomerSignups
            },
            {
              icon: <TrendingUp className="icon"/>,
              title: 'Remittance by New Customers',
              value: `$${metrics.totalRemittedByNewCustomers.toLocaleString()}`
            },
            {
              icon: <DollarSign className="icon"/>,
              title: 'Total Customer Remittance',
              value: `$${metrics.totalRemittedAllCustomers.toLocaleString()}`
            }
          ].map((c, i) => (
            <div key={i} className="dashboard-card">
              <div className="dashboard-card-icon">{c.icon}</div>
              <div className="dashboard-card-title">{c.title}</div>
              <div className="dashboard-card-value">{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
