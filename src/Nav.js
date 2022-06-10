import react from 'react' 
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
  <nav>
    <div className='nav-title-container'>
      <h1 className='nav-title'>Welcome to Designer Destination</h1>
    </div>
    <div className='nav-button-container'>
      <NavLink to='/'>
      <button className='nav-button'>Home</button>
      </NavLink>
      <NavLink to='/planner'>
      <button className='nav-button'>Planner</button>
      </NavLink>
    </div>
  </nav>
  )
}

export default Nav