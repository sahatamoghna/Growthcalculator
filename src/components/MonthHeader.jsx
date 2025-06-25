// src/components/MonthHeader.jsx
import React from 'react';
import '../styles/referee.css';

export default function MonthHeader({ months }) {
  return (
    <thead>
      <tr>
        <th rowSpan="2" className="sticky-col-1">Remitter ID</th>
        <th rowSpan="2" className="sticky-col-2">Sign-up Month</th>
        {months.map((m, i) => (
          <th
            key={m}
            colSpan="3"
            className={i > 0 ? 'border-after-group' : ''}
          >
            {m}
          </th>
        ))}
      </tr>
      <tr>
        {months.map((m, i) => (
          <React.Fragment key={m + '-sub'}>
            <th className={i > 0 ? 'border-after-group' : ''}>Transact?</th>
            <th># Transactions</th>
            <th>Amount (USD)</th>
          </React.Fragment>
        ))}
      </tr>
    </thead>
  );
}
