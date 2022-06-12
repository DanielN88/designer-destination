import React, { Component } from "react";
import Nav from "./Components/Nav";
import Aside from "./Components/Aside";
import Container from "./Components/Container";
import Attractions from "./Components/Attractions";
import AttractionDetails from "./Components/AttractionDetails";
import AttractionAside from "./Components/AttractionAside";
import Planner from "./Components/Planner";
import PlannerAside from "./Components/PlannerAside";
import { Route } from "react-router-dom";
import "./Styling/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      attractions: [],
      planner: [],
      city: "",
      radius: "",
      attraction: "",
      rating: "",
    };
  }

  getAllAttractions = (array) => {
    this.setState({
      attractions: [array],
    });
  };

  addToPlanner = (attraction) => {
    this.setState((prevState) => {
      return {
        attractions: prevState.attractions,
        planner: [...this.state.planner, attraction],
        city: prevState.city,
        radius: prevState.radius,
        attraction: prevState.attraction,
        rating: prevState.rating,
      };
    });
  };

  updateAppInputs = (state) => {
    this.setState((prevState) => {
      return {
        attractions: prevState.attractions,
        planner: prevState.planner,
        city: state.city,
        radius: state.radius,
        attraction: state.attraction,
        rating: state.rating,
      };
    });
  };

  handleSuggestTrip = (city, radius, attraction, rating) => {
    this.setState((prevState) => {
      return {
        attractions: prevState.attractions,
        planner: prevState.planner,
        city: city,
        radius: radius,
        attraction: attraction,
        rating: rating,
      };
    });
  };

  render() {
    return (
      <main className="app">
        <Nav />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="main-info">
                <Aside updateAppInputs={this.updateAppInputs} />
                <Container handleSuggestTrip={this.handleSuggestTrip} />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/attractions"
          render={() => {
            return (
              <div className="main-info">
                <AttractionAside />
                <Attractions inputData={this.state} />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/attractions/:id"
          render={({ match }) => {
            return (
              <AttractionDetails
                id={match.params.id}
                addToPlanner={this.addToPlanner}
                planner={this.state.planner}
              />
            );
          }}
        />
        <Route
          exact
          path="/planner"
          render={() => {
            return (
              <div className="planner-info">
                <PlannerAside plannerAttractions={this.state.planner} />
                <Planner planner={this.state.planner} />
              </div>
            );
          }}
        />
      </main>
    );
  }
}

export default App;
