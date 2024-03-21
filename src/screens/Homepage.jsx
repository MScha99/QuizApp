/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tutorial from '../components/Tutorial'

const Homepage = () => {
  return (
    <div>
      <h1>homepage siema</h1>
      <Tutorial />
      <Link to='/quizone'><button>Rozpocznij pierwszy moduł</button></Link>
      <Link to='/quiztwo'><button>Rozpocznij drugi moduł</button></Link>
      <Link to='/quizthree'><button>Rozpocznij trzeci moduł</button></Link>
    </div>
  )
}

export default Homepage
