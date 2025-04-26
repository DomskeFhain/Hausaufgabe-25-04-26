import React from 'react'
import { Link } from 'react-router-dom'
import './TierCard.css'

function TierCard(props) {
  return (
    <Link style={{textDecoration: "none"}} to={`/tiere/${props.id}`}>
    <div className='container'>
        <h2>Name: {props.Name}</h2>
        <p>Tierart: {props.Tierart}</p>
        <p>Krankheit: {props.Krankheit}</p>
        <p>Geburtstag: {props.Geburtstag}</p>
        <p>Gewicht: {props.Gewicht}</p>
    </div>
    </Link>
  )
}

export default TierCard 

