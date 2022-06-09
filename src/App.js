import React, {Component} from 'react'
import Nav from './Nav'
import Aside from './Aside'
import Container from './Container'
import Attractions from './Attractions'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      attractions: []
    }
  }

  getAllAttractions = (array) => {
    this.setState({
      attractions: array
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
             <Attractions allAttractions={this.state.attractions}/>
           </div>
         )
       }}
       />
      </main>
    )
  }
}

export default App;
