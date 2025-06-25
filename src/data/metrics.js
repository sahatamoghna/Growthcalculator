// src/data/metrics.js

// Demo metrics keyed by username.
export const userMetrics = {
  Sam: {
    newCustomerSignups: 12,
    remittedByNewCustomers: 48000,
    totalRemittedPrevMonth: 250000,
    totalCustomerSignups: 108,
    totalRemittedByNewCustomers: 360000,
    totalRemittedAllCustomers: 1500000,
  },
  Rick: {
    newCustomerSignups: 8,
    remittedByNewCustomers: 32000,
    totalRemittedPrevMonth: 180000,
    totalCustomerSignups: 75,
    totalRemittedByNewCustomers: 240000,
    totalRemittedAllCustomers: 1200000,
  },
  admin: {
    newCustomerSignups: 0,
    remittedByNewCustomers: 0,
    totalRemittedPrevMonth: 0,
    totalCustomerSignups: 0,
    totalRemittedByNewCustomers: 0,
    totalRemittedAllCustomers: 0,
  },
}

// Fallback metrics
export const defaultMetrics = {
  newCustomerSignups: 0,
  remittedByNewCustomers: 0,
  totalRemittedPrevMonth: 0,
  totalCustomerSignups: 0,
  totalRemittedByNewCustomers: 0,
  totalRemittedAllCustomers: 0,
}
