import React from 'react'
import './PlannerAside.css'

const PlannerAside = (props) => {
  if (props.plannerAttractions.length === 0) {
    return (
      <aside>
      <div className='planner-aside'>
        <p>Go ahead and add some things</p>
      </div>
      </aside>
    )
  } else {
    return (
      <aside>
      <div className='planner-aside'>
        <p>Looks like you have a pretty good trip planned, ready to start booking fligts?</p>
      </div>
      </aside>
    )
  }
}

export default PlannerAside