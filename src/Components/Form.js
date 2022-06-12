import { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styling/Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      radius: "",
      attraction: "",
      rating: "",
      allAttractions: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getFormInputs = (e) => {
    this.props.updateAppInputs(this.state);
  };

  render() {
    return (
      <div>
        <form className="form-container">
          <h3 className="form-title">Search Parameters</h3>
          <div className="form-selector">
            <label className="form-label">
              {" "}
              Choose a city
              <input
                type="text"
                placeholder="City"
                name="city"
                value={this.state.city}
                onChange={(event) => this.handleChange(event)}
              />
            </label>
          </div>

          <div className="form-selector">
            <label className="form-label">
              {" "}
              Choose a radius
              <select
                name="radius"
                value={this.state.radius}
                onChange={(event) => this.handleChange(event)}
              >
                <option value="">Radius</option>
                <option value="500">500</option>
                <option value="750">750</option>
                <option value="1000">1000</option>
              </select>
            </label>
          </div>

          <div className="form-selector">
            <label className="form-label">
              Choose attraction
              <select
                name="attraction"
                value={this.state.attraction}
                onChange={(event) => this.handleChange(event)}
              >
                <option value="">Attraction</option>
                <option value="accomodations">Accomodations</option>
                <option value="adult">Adult</option>
                <option value="amusements">Amusements</option>
                <option value="architecture">Architecture</option>
                <option value="theatres_entertainment">Cultural</option>
                <option value="historic">Historic</option>
                <option value="industrial_facilities">
                  Industrial facilities
                </option>
                <option value="natural">Natural</option>
                <option value="other">Other</option>
                <option value="religion">Religion</option>
                <option value="sport">Sport</option>
                <option value="tourist_facilities">Tourist Facilities</option>
              </select>
            </label>
          </div>

          <div className="form-selector">
            <label className="form-label">
              {" "}
              Choose a rating
              <select
                name="rating"
                value={this.state.rating}
                onChange={(event) => this.handleChange(event)}
              >
                <option value="">Rating</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </label>
          </div>
        </form>
        <NavLink className="form-button-container" to="/attractions">
          <button
            className="form-button"
            onClick={(e) => this.getFormInputs(e)}
          >
            Submit
          </button>
        </NavLink>
      </div>
    );
  }
}

export default Form;
