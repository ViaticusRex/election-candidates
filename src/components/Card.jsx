import React from 'react'
import image from '../assets/person.jpg'
import '../style/Card.css'

const Card = (prop) => {
  return (
    <div className="card">
        <img src={image}/>
        <h4>{prop.name}</h4>

    </div>
  )
}

export default Card