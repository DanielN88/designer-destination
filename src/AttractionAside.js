import React from 'react'
import { NavLink } from 'react-router-dom'
import './AttractionAside.css'

const AttractionAside = () => {
  return (
    <aside>
    <div className='attraction-aside'>
      <p className='attraction-aside-text'>Didn't find what you were looking for? Try searching again with different parameters.</p>
    </div>
      <NavLink to='/'>
        <button className='attraction-aside-button'>Return Home</button>
      </NavLink>
    </aside>
  )
}

export default AttractionAside