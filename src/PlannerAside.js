import React from 'react'
import './PlannerAside.css'

const PlannerAside = (props) => {
  if (props.plannerAttractions.length === 0) {
    return (
      <aside>
      <div className='planner-aside'>
        <p className='planner-aside-text'>You don't have any planned trips yet. Go ahead and add some attractions</p>
      </div>
      </aside>
    )
  } else {
    return (
      <aside>
      <div className='planner-aside'>
        <p className='planner-aside-text'>Looks like you have a pretty good trip planned, ready to start booking flights?</p>
      </div>
      </aside>
    )
  }
}

export default PlannerAside