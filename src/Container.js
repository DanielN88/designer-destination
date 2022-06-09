import React from 'react'
import Usage from './Usage'
import TripSuggest from './TripSuggest'
import './Container.css'

const Container = () => {
  return (
    <div className='container'>
      <Usage />
      <TripSuggest />
    </div>
  )
}
export default Container