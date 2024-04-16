/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Relaxation from '../components/Relaxation'
import "./Homepage.css"

const Homepage = () => {
  return (
    <div>
      <h1>homepage</h1>
     
      <ul>
        
          
            <Relaxation/>
          
        
       
          <Link to='/quizone'>
            <li>Rozpocznij pierwszy moduł</li>
          </Link>
       
        
          <Link to='/quiztwo'>
            <li>Rozpocznij drugi moduł</li>
          </Link>
       
       
          <Link to='/quizthree'>
            <li>Rozpocznij trzeci moduł</li>
          </Link>
       
      </ul>
    </div>
  )
}

export default Homepage
