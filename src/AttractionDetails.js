import React, { Component } from 'react'
import './AttractionDetails.css'
class AttractionDetails extends Component {
  constructor() {
    super()
    this.state = {
      attractionDetails: {},
    }
  }

  renderButton = () => {
    // console.log(this.props.planner, 'new method planner')
    // console.log(this.state.attractionDetails, 'new method attraction') 
    // if (this.props.planner.length === 0) return
    if (this.props.planner.length === 0) 
      return (
        <button className='attraction-button' onClick={() => this.props.addToPlanner(this.state.attractionDetails)}>Add to planner</button>
      )
     
       const plannerAttractions = this.props.planner.filter(attraction => attraction.xid === this.state.attractionDetails.xid
       )
    
     
    // console.log(plannerAttractions[0].xid, 'planner Attractions')
    // console.log(this.state.attractionDetails.xid, 'attracion details')
    if (plannerAttractions.length === 0) return (
      <button className='attraction-button' onClick={() => this.props.addToPlanner(this.state.attractionDetails)}>Add to planner</button>
    )
    if (plannerAttractions[0].xid === this.state.attractionDetails.xid) {
      return (
        <button className='attraction-button'>In planner</button>
      )
    } 
  }

  componentDidMount = () => {
    return fetch(`https://api.opentripmap.com/0.1/en/places/xid/${this.props.id}?apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a`).then((response) => {
        return response.json()
    }).then((data) => {
      this.setState({attractionDetails: data})
    })
  }
  
  componentDidUpdate = () => {
    
  }

  render() {
    if (!this.state.attractionDetails.address) return
    if (this.state.attractionDetails) {
    return (
      <div className='attraction-details-container'>
      <div className='attraction-details-info'>
        <h2 className='attraction-title'>{this.state.attractionDetails.name}</h2>
        <h3 className='attraction-address'>{this.state.attractionDetails.address.house_number} {this.state.attractionDetails.address.road}, {this.state.attractionDetails.address.county} {this.state.attractionDetails.address.state} {this.state.attractionDetails.address.postcode}</h3>
        <p className='attraction-text'>{this.state.attractionDetails.wikipedia_extracts.text}</p>
        {this.renderButton()}
        <button className='attraction-button'>Recomend to others</button>
      </div>
      <div className='attraction-details-img'>
        <img src={this.state.attractionDetails.preview.source}/>
      </div>
    </div>
    )
    }
  }

}

export default AttractionDetails