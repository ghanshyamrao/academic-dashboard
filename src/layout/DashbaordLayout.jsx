import React from 'react'
import AdmissionDashboard from '../Components/AdmissionDashboard'

const DashbaordLayout = () => {
  return (
    <div className="text-white p-2">
      <div className="min-h-screen flex">
        <div className="w-full">
          <AdmissionDashboard />
        </div>
      </div>
    </div>
  )
}

export default DashbaordLayout