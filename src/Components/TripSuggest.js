import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/TripSuggest.css";

const TripSuggest = (props) => {
  const updateSuggestion = (city, radius, attraction, rating) => {
    props.handleSuggestTrip(city, radius, attraction, rating);
  };

  return (
    <div className="trip-suggest">
      <h3 className="trip-suggest-title">Try one of these suggested trips</h3>
      <div className="suggest-container">
        <NavLink to="/attractions">
          <div
            className="suggest-card-one"
            onClick={() => updateSuggestion("las vegas", 1600, "adult", 3)}
          >
            <p className="suggest-card-text">Las Vegas Nightlife</p>
          </div>
        </NavLink>

        <NavLink to="/attractions">
          <div
            className="suggest-card-two"
            onClick={() => updateSuggestion("denver", 1600, "historic", 3)}
          >
            <p className="suggest-card-text">Denver Historical</p>
          </div>
        </NavLink>

        <NavLink to="/attractions">
          <div
            className="suggest-card-three"
            onClick={() => updateSuggestion("miami", 1600, "cultural", 3)}
          >
            <p className="suggest-card-text">Miami Culture</p>
          </div>
        </NavLink>

        <NavLink to="/attractions">
          <div
            className="suggest-card-four"
            onClick={() =>
              updateSuggestion("san francisco", 1600, "architecture", 3)
            }
          >
            <p className="suggest-card-text">San Francisco Architecture</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default TripSuggest;
