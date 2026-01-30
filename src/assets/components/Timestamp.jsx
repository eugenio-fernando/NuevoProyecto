import React from 'react'
import './Timestamp.css'

function Timestamp() {
  const now = new Date().toLocaleString()
  
  return (
    <div className="timestamp">
      <p>Current time: {now}</p>
    </div>
  )
}

export default Timestamp
