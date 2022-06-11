import react from 'react'
import './Usage.css'
import './Usage'
import skydiving from './assets/skydiving.png'
import beach from './assets/beach.png'
import location from './assets/location.png'


const Usage = () => {
  return (
  <div className='usage-container'>
    <div className='usage-card'>
      <img className='beach' src={beach} alt='beach'/>
      <h3>Destination Variation</h3>
      <p className='usage-text'>You're not limited with our trip planner. Find exactley what you want.</p>
    </div>
    <div className='usage-card'>
    <img className='skydiving' src={skydiving} alt='skydiving'/>
      <h3>Memorable Experinces</h3>
      <p className='usage-text'>Browse and plan your perfect trip with attractions off the beaten path.</p>
    </div>
    <div className='usage-card'>
    <img className='location' src={location} alt='location'/>
      <h3>Plan by location</h3>
      <p className='usage-text'>Our high quality search engine lets plan around the radius of your stay</p>
    </div>
  </div>
  )
}

export default Usage