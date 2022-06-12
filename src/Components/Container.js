import React from "react";
import Usage from "./Usage";
import TripSuggest from "./TripSuggest";
import "../Styling/Container.css";

const Container = (props) => {
  return (
    <div className="container">
      <Usage />
      <TripSuggest handleSuggestTrip={props.handleSuggestTrip} />
    </div>
  );
};
export default Container;
