import react from 'react'
import './TripSuggest.css'

const TripSuggest = () => {
  return (
    <div className='trip-suggest'>
      <h3>Try one of these suggested trips</h3>
      <div className="suggest-container">
        <div className="suggest-card"></div>
        <div className="suggest-card"></div>
        <div className="suggest-card"></div>
        <div className="suggest-card"></div>
      </div>
    </div>
  )
}

export default TripSuggest