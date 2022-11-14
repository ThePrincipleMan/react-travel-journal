import React from 'react'
import data from './data'
import Card from './Card'

const Hero = () => {
  const cards = data.map(card => {
    return (
        <Card 
            {...card}
        />
    )
  })
  return (
    <main>
        {cards}
    </main>
  )
}

export default Hero