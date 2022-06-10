import React, {Component} from 'react'
import Nav from './Nav'
import Aside from './Aside'
import Container from './Container'
import Attractions from './Attractions'
import AttractionDetails from './AttractionDetails'
import Planner from './Planner'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      attractions: [],
      planner: {}
    }
  }

  getAllAttractions = (array) => {
    this.setState({
      attractions: [array]
    })
  }

  addToPlanner = (attraction) => {
  this.setState((prevState) => {
    return {
      attractions: prevState.attractions,
      planner: [attraction]
    }
  })
  }

  render() {
    return (
      <main className='app'>
        <Nav />
        <Route exact path='/' render={() => {
          return (
            <div className='main-info'>
            <Aside getAllAttractions={this.getAllAttractions}/>
            <Container/>
          </div>
          )
        }}
        />
       <Route exact path='/attractions' render={() => {
         return (
           <div className='main-info'>
             <Aside />
             <Attractions getAllAttractions={this.getAllAttractions}/>
           </div>
         )
       }}
       />
       <Route exact path='/attractions/:id' render={({match}) => {
         return (
           <AttractionDetails 
           id={match.params.id}
           addToPlanner={this.addToPlanner}
           />
         )
       }}
       />
       <Route exact path='/planner' render={() => {
         return (
           <div className='planner-info'>
            <Aside />
            <Planner planner={this.state.planner}/>
           </div>
         )
       }}
       />
      </main>
    )
  }
}

export default App;
