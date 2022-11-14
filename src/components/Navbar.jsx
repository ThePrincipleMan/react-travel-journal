import React from 'react'
import worldlogo from '../images/Fill 213.png'
import './styles.css'

const Navbar = () => {
  return (
    <nav>
        <img src={worldlogo} />
        <h3>My travel journal.</h3>
    </nav>
  )
}

export default Navbar