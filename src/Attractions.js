import react from 'react'
import Card from './Card'
import Form from './Form'
import { NavLink } from 'react-router-dom'

const Attractions = (props) => {
  console.log(props.allAttractions)
  const attractionCards = props.allAttractions.map(attraction => {
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

export default Attractions