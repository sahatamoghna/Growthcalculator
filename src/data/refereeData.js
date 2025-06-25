// src/data/refereeData.js

// Headers: Feb–May 2025
export const refereeMonths = [
  'February (2025)',
  'March (2025)',
  'April (2025)',
  'May (2025)',
]

// Base sample rows for "sam"
const baseSam = [
  {
    remitterId: '81362',
    signUpMonth: 'Dec 2024',
    records: {
      'February (2025)': { transact: 'No',  count: 0,    amount: 0.0 },
      'March (2025)'   : { transact: 'No',  count: 0,    amount: 0.0 },
      'April (2025)'   : { transact: 'No',  count: 0,    amount: 0.0 },
      'May (2025)'     : { transact: 'No',  count: 0,    amount: 0.0 },
    },
  },
  {
    remitterId: '83725',
    signUpMonth: 'Jan 2025',
    records: {
      'February (2025)': { transact: 'No',  count: 0,      amount: 0.0 },
      'March (2025)'   : { transact: 'Yes', count: 7,      amount: 504.38 },
      'April (2025)'   : { transact: 'Yes', count: 11,     amount: 1231.82 },
      'May (2025)'     : { transact: 'No',  count: 0,      amount: 0.0 },
    },
  },
  {
    remitterId: '87848',
    signUpMonth: 'Mar 2025',
    records: {
      'February (2025)': { transact: 'No',  count: 0,    amount: 0.0 },
      'March (2025)'   : { transact: 'Yes', count: 2,    amount: 245.28 },
      'April (2025)'   : { transact: 'Yes', count: 2,    amount: 119.68 },
      'May (2025)'     : { transact: 'No',  count: 0,    amount: 0.0 },
    },
  },
  {
    remitterId: '88480',
    signUpMonth: 'Mar 2025',
    records: {
      'February (2025)': { transact: 'Yes', count: 7,    amount: 257.15 },
      'March (2025)'   : { transact: 'Yes', count: 31,   amount: 3119.93 },
      'April (2025)'   : { transact: 'No',  count: 0,    amount: 0.0 },
      'May (2025)'     : { transact: 'Yes', count: 3,    amount: 276.55 },
    },
  },
  {
    remitterId: '90003',
    signUpMonth: 'Apr 2025',
    records: {
      'February (2025)': { transact: 'No',  count: 0,    amount: 0.0 },
      'March (2025)'   : { transact: 'No',  count: 0,    amount: 0.0 },
      'April (2025)'   : { transact: 'Yes', count: 3,    amount: 280.56 },
      'May (2025)'     : { transact: 'No',  count: 0,    amount: 0.0 },
    },
  },
]

// Same for rick (1 sample, will cycle)
const baseRick = [
  {
    remitterId: 'A1001',
    signUpMonth: 'Feb 2025',
    records: {
      'February (2025)': { transact: 'Yes', count: 4,  amount: 120.0 },
      'March (2025)'   : { transact: 'Yes', count: 5,  amount: 200.0 },
      'April (2025)'   : { transact: 'No',  count: 0,  amount: 0.0 },
      'May (2025)'     : { transact: 'Yes', count: 2,  amount: 60.0 },
    },
  },
]

function expandAndSort(baseArr, count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    const it = baseArr[i % baseArr.length];
    arr.push({
      ...it,
      remitterId: `${it.remitterId}-${Math.floor(i/baseArr.length)+1}`,
    });
  }
  return arr.sort((a, b) => new Date(a.signUpMonth) - new Date(b.signUpMonth));
}

export const refereeDataMap = {
  Sam: {
    staffName: 'Sam',
    staffCode: '123456',
    months: refereeMonths,
    data: expandAndSort(baseSam, 55),
  },
  Rick: {
    staffName: 'Rick',
    staffCode: '100975',
    months: refereeMonths,
    data: expandAndSort(baseRick, 55),
  },
};

export const defaultRefereeData = {
  staffName: 'Unknown User',
  staffCode: '--',
  months: [],
  data: [],
};