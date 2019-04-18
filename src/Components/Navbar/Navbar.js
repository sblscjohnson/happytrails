import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'
import Greentree from './../../resources/Greentree.svg'

const Navbar = (props) => {
  return (
    <div id='Navbar-parent'>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/Explore'>Explore</Link>
        <Link to='/'><img src={Greentree} alt='Happy Trails!' /></Link>
        <Link to='/YourTrails'>Your Trails</Link>
        <Link to='/Account'>Account</Link>
      </div>
      <hr />
    </div>
  )
}

export default Navbar