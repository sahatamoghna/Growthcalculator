// src/pages/AdminPage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminPage({ user }) {
  const navigate = useNavigate()

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">This page is under construction.</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition"
      >
        ← Back
      </button>
    </div>
  )
}
