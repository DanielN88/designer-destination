import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      radius: '',
      attraction: '',
      rating: '',
      allAttractions: [],
    }
  }

  getLocation = (event) => {
    event.preventDefault()
    fetch('https://api.opentripmap.com/0.1/en/places/geoname?name=los%20angelos&country=us&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a')
    .then((response) => {
      return response.json()
    }).then(data => {
      this.getAttractions()
    })
  }

  getAttractions = () => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=500&lon=-118.24368&lat=34.05223&kinds=theatres_and_entertainments&rate=3&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a')
    .then((response) => {
      return response.json()
    }).then(data => {
      this.getAttractionDetails(data)
    })
  }

  getAttractionDetails = (data) => {
    data.features.forEach(attraction => {
     return fetch(`https://api.opentripmap.com/0.1/en/places/xid/${attraction.properties.xid}?apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a`).then((response) => {
        return response.json()
      }).then(dataId => {
        this.setState((prevState) => {
          return {
            city: prevState.city,
            radius: prevState.radius,
            attraction: prevState.attraction,
            rating: prevState.rating,
            allAttractions: [...prevState.allAttractions, dataId],
          }
        })
      })
    })
    this.updateAppState()
  }

  updateAppState = () => {
    this.props.getAllAttractions(this.state.allAttractions)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <form>
          <h3>Search Parameters</h3>
          <input type='text' placeholder='City' name='city' value={this.state.city} onChange={event => this.handleChange(event)}/>
          <input type='text' placeholder='Radius' name='radius' value={this.state.radius} onChange={event => this.handleChange(event)}/>
          <input type='text' placeholder='Attraction' name='attraction' value={this.state.attraction} onChange={event => this.handleChange(event)}/>
          <input type='text' placeholder='Rating' name='rating' value={this.state.rating} onChange={event => this.handleChange(event)}/>
          
         
          
         <NavLink to='/attractions'>
          <button 
          onClick={(event) => this.getLocation(event)}
          >Submit
          </button>
         </NavLink>

        </form>
        
        <NavLink to='/attractions'>
        <button>attract</button>
        </NavLink>
      </div>
      
    )
  }
}

export default Form