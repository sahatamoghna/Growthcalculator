// src/components/ReportTable.jsx
import React from 'react';
import '../styles/referee.css';
import MonthHeader from './MonthHeader';

function parseMY(str) {
  const [m, y] = str.split(' (');
  return new Date(y.slice(0,-1), new Date(`${m} 1`).getMonth());
}

export default function ReportTable({ months, rows, search, filter }) {
  const filtered = rows.filter(r => {
    const okID = r.remitterId.includes(search.trim());
    const okMonth =
      filter.length === 0 || filter.includes(r.signUpMonth);
    return okID && okMonth;
  });

  return (
    <div className="referee-report">
      <table className="report-table">
        <MonthHeader months={months} />
        <tbody>
          {filtered.map(({ remitterId, signUpMonth, records }) => {
            const sd = new Date(signUpMonth);
            return (
              <tr key={remitterId}>
                <td className="sticky-col-1">{remitterId}</td>
                <td className="sticky-col-2">{signUpMonth}</td>
                {months.map((m, i) => {
                  const cd = parseMY(m);
                  const show = sd <= cd;
                  const r = records[m] || {};
                  return (
                    <React.Fragment key={m}>
                      <td className={i>0?'border-after-group':''}>
                        {show ? r.transact : ''}
                      </td>
                      <td>{show ? r.count : ''}</td>
                      <td>{show ? r.amount.toFixed(2) : ''}</td>
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
