// src/data/metrics.js

// Demo metrics keyed by **lowercase** username
export const userMetrics = {
  Sam: {
    newCustomerSignups:                12,
    remittedByNewCustomers:         48000,
    totalRemittedPrevMonth:        250000,
    totalCustomerSignups:           108,
    totalRemittedByNewCustomers:   360000,
    totalRemittedAllCustomers:     1500000,

    // ← NEW Sales-Credits metrics
    retailAcquisitionCount:           10,
    retailAcquisitionCredits:        200,
    retailConversionCount:             8,
    retailConversionCredits:         240,
    activeAmbassadorAcquisitionCount:  6,
    activeAmbassadorAcquisitionCredits:120,
    activeAmbassadorConversionCount:   5,
    activeAmbassadorConversionCredits:150,
    businessAcquisitionCount:          4,
    businessAcquisitionCredits:       800,
    businessConversionCount:           2,
    businessConversionCredits:       1600,
  },
  Rick: {
    newCustomerSignups:               8,
    remittedByNewCustomers:         32000,
    totalRemittedPrevMonth:        180000,
    totalCustomerSignups:            75,
    totalRemittedByNewCustomers:   240000,
    totalRemittedAllCustomers:     1200000,

    // ← NEW Sales-Credits metrics
    retailAcquisitionCount:            7,
    retailAcquisitionCredits:        140,
    retailConversionCount:             5,
    retailConversionCredits:         150,
    activeAmbassadorAcquisitionCount:  4,
    activeAmbassadorAcquisitionCredits: 80,
    activeAmbassadorConversionCount:   3,
    activeAmbassadorConversionCredits: 90,
    businessAcquisitionCount:          2,
    businessAcquisitionCredits:       400,
    businessConversionCount:           1,
    businessConversionCredits:        800,
  },
  admin: {
    newCustomerSignups:                0,
    remittedByNewCustomers:             0,
    totalRemittedPrevMonth:             0,
    totalCustomerSignups:               0,
    totalRemittedByNewCustomers:        0,
    totalRemittedAllCustomers:          0,

    // ← NEW Sales-Credits metrics (all zero)
    retailAcquisitionCount:             0,
    retailAcquisitionCredits:           0,
    retailConversionCount:              0,
    retailConversionCredits:            0,
    activeAmbassadorAcquisitionCount:   0,
    activeAmbassadorAcquisitionCredits: 0,
    activeAmbassadorConversionCount:    0,
    activeAmbassadorConversionCredits:  0,
    businessAcquisitionCount:           0,
    businessAcquisitionCredits:         0,
    businessConversionCount:            0,
    businessConversionCredits:          0,
  },
}

// Fallback metrics
export const defaultMetrics = {
  newCustomerSignups:                0,
  remittedByNewCustomers:            0,
  totalRemittedPrevMonth:            0,
  totalCustomerSignups:              0,
  totalRemittedByNewCustomers:       0,
  totalRemittedAllCustomers:         0,

  retailAcquisitionCount:             0,
  retailAcquisitionCredits:           0,
  retailConversionCount:              0,
  retailConversionCredits:            0,
  activeAmbassadorAcquisitionCount:   0,
  activeAmbassadorAcquisitionCredits: 0,
  activeAmbassadorConversionCount:    0,
  activeAmbassadorConversionCredits:  0,
  businessAcquisitionCount:           0,
  businessAcquisitionCredits:         0,
  businessConversionCount:            0,
  businessConversionCredits:          0,
}
