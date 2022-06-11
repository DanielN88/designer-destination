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
      isError: false
    }
  }

  componentDidMount = () => {
    if (!this.props.inputData.city || !this.props.inputData.radius || !this.props.inputData.attraction || !this.props.inputData.rating) return
    const city = this.props.inputData.city.split(' ').join('%20')
    this.getLocation(city)
  }

  getLocation = (city) => {
    fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&country=us&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        this.setState((prevState) => {
          return {
          allNewAttractions: [prevState.allNewAttractions],
          isError: true
          }
        });
        throw Error(response.statusText);
      }
    }).then(data => {
      const lat = data.lat
      const lon = data.lon
      this.getAttractions(lat, lon)
    }).catch((err) => {
      console.log(err)
    })
  }

  getAttractions = (lat, lon) => {
    fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=${this.props.inputData.radius}&lon=${lon}&lat=${lat}&kinds=${this.props.inputData.attraction}&rate=3&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        this.setState((prevState) => {
          return {
          allNewAttractions: [prevState.allNewAttractions],
          isError: true
          }
        });
        throw Error(response.statusText);
      }
    }).then(data => {
      if (data.features.length === 0) {
        return
      } else if (data.features.length <= 7 ) {
        return this.getAttractionDetails(data.features)
      } else if (data.features.length >= 8) {
        const alteredData = data.features.slice(0, 8)
        return this.getAttractionDetails(alteredData)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getAttractionDetails = (data) => {
    data.forEach(attraction => {
     return fetch(`https://api.opentripmap.com/0.1/en/places/xid/${attraction.properties.xid}?apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        this.setState((prevState) => {
          return {
          allNewAttractions: [prevState.allNewAttractions],
          isError: true
          }
        });
        throw Error(response.statusText);
      }
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
      }).catch((err) => {
        console.log(err)
      })
    })
  }


  updateAppState = () => {
    console.log(this.props, 'in update')
    console.log(this.state.allNewAttractions, 'update state')
    this.props.getAllAttractions(this.state.allNewAttractions)
  }

  render() {
   if (!this.props.inputData.city || !this.props.inputData.radius || !this.props.inputData.attraction || !this.props.inputData.rating) {
      return (
        <div>
          <p>Whoops looks like all the inputs werent filled out. Please head back and fill out all the info.</p>
          <NavLink to='/'>
            <button>Return to Search</button>
          </NavLink>
        </div>
      )
    } else if (this.state.isError) {
      return (
        <div>
          <p>Something went wrong behind the scenes, please try again later</p>
        </div>
      )
    } else if (this.state.allNewAttractions.length === 0) {
      return <p>Try expanding your search radius and rating</p>
    }  else {
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
}

export default Attractions