// src/components/StaffReport.jsx
import React from 'react';
import ReportTable from './ReportTable';

export default function StaffReport({ data, search, filter }) {
  return (
    <ReportTable
      months={data.months}
      rows={data.data}
      search={search}
      filter={filter}
    />
  );
}
