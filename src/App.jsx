/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Quiz from "./components/Quiz"

import {quizQuestions} from "./constants"

function App() {
  

  return <Quiz questions={quizQuestions.questions}/>


}

export default App
7