/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { resultInitialState } from '../constants'
import { Link } from 'react-router-dom'

import './Quiz.css'
import Timer from '../components/Timer'
import Task from '../components/Task'
import Tutorial from '../components/Tutorial'
import TopBanner from '../components/TopBanner'
import RightBanner from '../components/RightBanner'
import Return from '../components/Return'

const QuizTwo = ({ questions }) => {
  let quizTime = 10000000000
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answerIndex, setAnswerIndex] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [result, setResult] = useState(resultInitialState)
  const [showResult, setShowResult] = useState(false)
  const { type, question, choices, correctAnswer } = questions[currentQuestion]
  const [sentence, setSentence] = useState([])
  const [counter, setCounter] = useState(quizTime)
  const [elapsedTime, setElapsedTime] = useState(0)

  const onAnswerClick = (answer, index = null) => {
    switch (type) {
      case 'single-choice':
        setAnswerIndex(index)
        break

      case 'create-sentence':
        setAnswerIndex(1)
        break
    }
    setAnswer(answer)
  }

  //update scores when user moves to next question; display results after last question
  const onClickNext = () => {
    setAnswerIndex(null)
    setSentence([])
    console.log('answer: ', { answer })
    console.log('correctanswer: ', { correctAnswer })
    setResult((prev) =>
      answer === correctAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    )

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setElapsedTime(quizTime - counter)
      setShowResult(true)
    }
  }

  const exportResultsToFile = () => {
    const resultsText = `
      Wyniki
      Punkty: ${result.score}
      Poprawne odpowiedzi: ${result.correctAnswers}
      Błędne odpowiedzi: ${result.wrongAnswers}
      Upłynięty czas: ${elapsedTime} s
    `

    const blob = new Blob([resultsText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'wyniki.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
    <TopBanner/>
    <RightBanner/>
<div className='quiz-container'>
      {!showResult ? (
        <div>
          <div className='header'>
          <h3>
            {' '}
            Pytanie {currentQuestion + 1} / {questions.length}            
          </h3>
          <Tutorial />
          <Return />
          </div>
          <Timer
            setShowResult={setShowResult}
            counter={counter}
            setCounter={setCounter}
            setElapsedTime={setElapsedTime}
            quizTime={quizTime}
          />
          <Task
            type={type}
            question={question}
            choices={choices}
            onAnswerClick={onAnswerClick}
            answerIndex={answerIndex}
            sentence={sentence}
            setSentence={setSentence}
          />

          <div>
            <button className='next-button'
              onClick={() => onClickNext({ type })}
              disabled={answerIndex === null}
            >
              {currentQuestion === questions.length - 1
                ? 'zakończ'
                : 'następne pytanie'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Wyniki</h3>
          <p>Punkty: {result.score}</p>
          <p>Poprawne odpowiedzi: {result.correctAnswers}</p>
          <p>Błędne odpowiedzi: {result.wrongAnswers}</p>
          <p>Upłynięty czas: {elapsedTime} s</p>

          <Link to='/'>
            <button
              onClick={() => {
                exportResultsToFile()
              }}
            >
              Zakończ moduł
            </button>
          </Link>
        </div>
      )}
    </div>
    </>
  )
}

export default QuizTwo
