import React from 'react'
import pointer from '../images/Fill 220.svg'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.imageUrl} />
        <div className="Card--content   ">
        <div className='Card--top-line'>
            <img src={pointer} />
            <h4>{props.location}</h4>
            <a href={props.googleMapsUrl} className='grey'>View on google maps</a>
        </div>
        <div className='Card--title'>
            <h2>{props.title}</h2>
        </div>
        <div className='Card--duration'>
            {props.startDate} - {props.endDate}
        </div>
        <div className='Card--description'>
            {props.description}
        </div>
        </div>
    </div>
  )
}

export default Card