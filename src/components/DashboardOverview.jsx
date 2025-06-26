import React from 'react'
import '../styles/dashboard.css'
import {
  UserPlus,
  DollarSign,
  BarChart2,
  TrendingUp,
  Users
} from 'lucide-react'

export default function DashboardOverview({ metrics }) {
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
    businessConversionCredits,
    newCustomerSignups,
    remittedByNewCustomers,
    totalRemittedPrevMonth,
    totalCustomerSignups,
    totalRemittedByNewCustomers,
    totalRemittedAllCustomers
  } = metrics

  return (
    <div className="dashboard-overview">
      {/* 8. Headings moved outside cards, with margins */}
      <h3 className="dashboard-section-title">Last Month Sales Credits</h3>
      <section className="section-card">
        <div className="sales-credits-grid">
          <div className="empty-cell" />
          <div className="sales-credits-header">Retail</div>
          <div className="sales-credits-header">Ambassador</div>
          <div className="sales-credits-header">Business (MTO)</div>

          <div className="sales-credits-row-title">Acquisition</div>
          {[retailAcquisitionCredits, activeAmbassadorAcquisitionCredits, businessAcquisitionCredits].map((amt, i) => (
            <div key={i} className="sales-credit-cell-card">
              <div className="sales-card-amount">{amt.toLocaleString()}</div>
              <div className="sales-card-count">
                {[retailAcquisitionCount, activeAmbassadorAcquisitionCount, businessAcquisitionCount][i]}
              </div>
            </div>
          ))}

          <div className="sales-credits-row-title">Conversion</div>
          {[retailConversionCredits, activeAmbassadorConversionCredits, businessConversionCredits].map((amt, i) => (
            <div key={i} className="sales-credit-cell-card">
              <div className="sales-card-amount">{amt.toLocaleString()}</div>
              <div className="sales-card-count">
                {[retailConversionCount, activeAmbassadorConversionCount, businessConversionCount][i]}
              </div>
            </div>
          ))}
        </div>
      </section>

      <h3 className="dashboard-section-title">Last Month Performance</h3>
      <section className="section-card">
        <div className="dashboard-grid">
          {[
            {
              icon: <UserPlus className="icon"/>,
              title: 'New Customer Sign-ups',
              value: newCustomerSignups
            },
            {
              icon: <DollarSign className="icon"/>,
              title: 'Remittance by New Customers',
              value: remittedByNewCustomers.toLocaleString()
            },
            {
              icon: <BarChart2 className="icon"/>,
              title: 'Total Customer Remittance',
              value: totalRemittedPrevMonth.toLocaleString()
            }
          ].map((c, i) => (
            <div key={i} className="dashboard-card">
              <div className="dashboard-card-icon">{c.icon}</div>
              <div className="dashboard-card-title">{c.title}</div>
              <div className="dashboard-card-value">{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      <h3 className="dashboard-section-title">Year-to-Last-Month Performance</h3>
      <section className="section-card">
        <div className="dashboard-grid">
          {[
            {
              icon: <Users className="icon"/>,
              title: 'Customer Sign-ups',
              value: totalCustomerSignups
            },
            {
              icon: <TrendingUp className="icon"/>,
              title: 'Remittance by New Customers',
              value: totalRemittedByNewCustomers.toLocaleString()
            },
            {
              icon: <DollarSign className="icon"/>,
              title: 'Total Customer Remittance',
              value: totalRemittedAllCustomers.toLocaleString()
            }
          ].map((c, i) => (
            <div key={i} className="dashboard-card">
              <div className="dashboard-card-icon">{c.icon}</div>
              <div className="dashboard-card-title">{c.title}</div>
              <div className="dashboard-card-value">{c.value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
