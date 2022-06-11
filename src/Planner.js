import react from 'react'
import Card from './Card'
import './Planner.css'

const Planner = (props) => { 
  if (props.planner.length === 0) {
    return (
      <p>Add some attractions!</p>
    )
  } else if (props.planner) {
    const plannerCards = props.planner.map(attraction => {
      return (
        <div key={attraction.xid}>
          <Card 
          id={attraction.xid}
          name={attraction.name}
          image={attraction.preview.source}
          address={attraction.address.county}
          />
        </div>
      )
    })
    return (
      <div className='planner-container'>
        {plannerCards}
      </div>
    )
  }
}

export default Planner