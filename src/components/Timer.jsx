/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './Timer.css'

const Timer = ({ setShowResult, counter, setCounter, setElapsedTime, quizTime }) => {
  useEffect(() => {
    setInterval(() => {
      setCounter((cur) => cur - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (counter === 0) {
      setShowResult(true)
      setElapsedTime(quizTime)
    }
  }, [counter, setShowResult])

  return (
    <div className='timer-container'>
      <div className='time-text'>
        Pozostało {counter >= 0 ? counter : 0} sekund
      </div>
      <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${counter}%` }}></div>
      </div>
    </div>
  )
}

export default Timer
