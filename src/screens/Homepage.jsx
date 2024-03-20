/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>homepage siema</h1>
      <Link to='/quizone'>Rozpocznij pierwszy moduł</Link>
      <Link to='/quiztwo'>Rozpocznij drugi moduł</Link>
      <Link to='/quizthree'>Rozpocznij trzeci moduł</Link>
    </div>
  )
}

export default Homepage
