import react from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='attraction-card' key={props.xid}>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} className='card-image'/>
      <p>{props.address}</p>
    </div>
  )
}

export default Card