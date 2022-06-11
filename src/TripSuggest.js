import React from 'react'
import { NavLink } from 'react-router-dom'
import './TripSuggest.css'

const TripSuggest = (props) => {

  const updateSuggestion = (city, radius, attraction, rating) => {
    props.handleSuggestTrip(city, radius, attraction, rating)
  }

  return (
    <div className='trip-suggest' >
      <h3>Try one of these suggested trips</h3>
      <div className="suggest-container">

        <NavLink to='/attractions'>
        <div className="suggest-card" onClick={() => updateSuggestion('las vegas', 700, 'adult', 3)}>
          <p>Las Vegas</p>
          <p>Nightlife</p>
        </div>
        </NavLink>

        <NavLink to='/attractions'>
        <div className="suggest-card" onClick={() => updateSuggestion('denver', 700, 'historic', 3)}>
          <p>Denver</p>
          <p>Historical</p>
        </div>
        </NavLink>

        <NavLink to='/attractions'>
        <div className="suggest-card" onClick={() => updateSuggestion('miami', 700, 'cultural', 3)}>
          <p>Miami</p>
          <p>culture</p>
        </div>
        </NavLink>

        <NavLink to='/attractions'>
        <div className="suggest-card" onClick={() => updateSuggestion('san francisco', 700, 'architecture', 3)}>
          <p>San Francisco</p>
          <p>Architecture</p>
        </div>
        </NavLink>
      </div>
    </div>
  )
}

export default TripSuggest