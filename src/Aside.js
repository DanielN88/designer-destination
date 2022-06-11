import React from 'react'
import Form from './Form'
import './Aside.css'

const Aside= (props) => {
  return (
    <div>
      <aside>
        <Form updateAppInputs={props.updateAppInputs}/>
     </aside>
    </div>
  )
}

export default Aside