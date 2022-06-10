import React, { Component } from 'react'
import Card from './Card'
import Form from './Form'
import { NavLink } from 'react-router-dom'
import './Attractions.css'

class Attractions extends Component {
  constructor() {
    super()
    this.state = {
      allNewAttractions: [],
    }
  }

  componentDidMount = () => {
    this.getLocation()
  }

  getLocation = (event) => {
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
            // city: prevState.city,
            // radius: prevState.radius,
            // attraction: prevState.attraction,
            // rating: prevState.rating,
            allNewAttractions: [...prevState.allNewAttractions, dataId],
          }
        })
      })
    })
  }


  updateAppState = () => {
    console.log(this.props, 'in update')
    console.log(this.state.allNewAttractions, 'update state')
    this.props.getAllAttractions(this.state.allNewAttractions)
  }

  render() {
      const attractionCards = this.state.allNewAttractions.map(attraction => {
        return (
          <NavLink to={`/attractions/${attraction.xid}`}  key={attraction.xid} className='card-navs'>
            <Card
              id={attraction.xid}
              name={attraction.name}
              image={attraction.preview.source}
              address={attraction.address.county}
            />
          </NavLink>
        )
      })

      return <div className='attraction-card-container'>
              {attractionCards}
            </div> 
  }
}

export default Attractions