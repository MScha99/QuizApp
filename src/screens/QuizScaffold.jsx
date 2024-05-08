/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Unstable_Grid2 as Grid,
  Button,
  LinearProgress,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { resultInitialState } from '../constants'
import { Link } from 'react-router-dom'
import Timer from '../components/Timer'
import Task from '../components/Task'
import HomeDialog from '../components/HomeDialog'
import GuidebookDialog from '../components/GuidebookDialog'
import TopBanner from '../components/TopBanner'
import SideBanner from '../components/SideBanner'
import AdvertPopup from '../components/AdvertPopup'

export default function QuizScaffold({
  questions,
  banners = null,
  popups = false,
}) {
  let quizTime = 600
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answerIndex, setAnswerIndex] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [result, setResult] = useState(resultInitialState)
  const [showResult, setShowResult] = useState(false)
  const { type, question, choices, correctAnswer } = questions[currentQuestion]
  const [sentence, setSentence] = useState([])
  const [counter, setCounter] = useState(quizTime)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [footColor, setFootColor] = useState('white')
  const [displayPopup, setDisplayPopup] = useState(false)

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
        ? (setFootColor('lightgreen'),
          {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          })
        : (setFootColor('red'),
          {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          })
    )
    setTimeout(() => {
      if (currentQuestion !== questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
      } else {
        setElapsedTime(quizTime - counter)
        setShowResult(true)
      }
      setFootColor('white')
      setAnswerIndex(null)
    }, 800)
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
    <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
      {/* Top Banner */}
      <Grid item xs={12} sm={12} md={12}>
        <Box
          className='top-banner'
          p={2}
          //   bgcolor='lightblue'
          sx={{
            borderRadius: 8,
            minHeight: '10vh',
            maxHeight: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', // Prevents content overflow
          }}
        >
          <TopBanner banners={banners.top} currentQuestion={currentQuestion} />
        </Box>
      </Grid>

      {/* Left Banner */}
      <Grid item xs={3} sm={2} md={2}>
        <Box
          p={2}
          // bgcolor='lightgreen'
          sx={{
            borderRadius: 8,
            // height: '100%',
            maxHeight: '76vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', // Prevents content overflow
          }}
        >
          <SideBanner
            banners={banners.left}
            currentQuestion={currentQuestion}
          />
        </Box>
      </Grid>

      {/* Main Content Area */}
      <Grid item xs={6} sm={8} md={8}>
        <Box
          p={2}
          //   bgcolor='lightgrey'
          sx={{
            bgcolor: 'white',
            border: 2,
            borderRadius: 12,
            borderColor: '#E5E5E5',
            minHeight: '76vh',
            maxHeight: '76vh',
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          {!showResult ? (
            <div>
              <Box
                className='Head'
                sx={{
                  //   bgcolor: 'lightgrey',
                  minHeight: '15vh',
                  //   display: 'flex',
                  //   flexDirection: 'column',
                  //   justifyContent: 'center',
                  //   alignItems: 'center'
                }}
              >
                <LinearProgress
                  variant='determinate'
                  value={((currentQuestion + 1) / questions.length) * 100}
                  sx={{
                    height: '16px',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    backgroundColor: '#E5E5E5',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#58CC02',
                      borderRadius: '8px',
                    },
                  }}
                />
                <Box
                  className='stuff-in-header'
                  sx={{
                    textAlign: 'start',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        lineHeight: '19px',
                        color: '#777777',
                        fontWeight: 'bold',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '16px',
                      }}
                    >
                      Pytanie {currentQuestion + 1}/{questions.length}
                    </Typography>
                    <Timer
                      setShowResult={setShowResult}
                      counter={counter}
                      setCounter={setCounter}
                      setElapsedTime={setElapsedTime}
                      quizTime={quizTime}
                    />
                  </div>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'auto auto',
                      gap: '16px',
                    }}
                  >
                    <HomeDialog />
                    <GuidebookDialog />
                  </Box>

                  <AdvertPopup
                    displayPopup={displayPopup}
                    setDisplayPopup={setDisplayPopup}
                    banners={banners.popup}
                    currentQuestion={currentQuestion}
                    quizTime={quizTime}
                  />
                </Box>
              </Box>
              <Box
                className='Body'
                sx={{
                  //   bgcolor: 'lightblue',
                  minHeight: '56vh',
                }}
              >
                <Task
                  type={type}
                  question={question}
                  choices={choices}
                  onAnswerClick={onAnswerClick}
                  answerIndex={answerIndex}
                  sentence={sentence}
                  setSentence={setSentence}
                />
              </Box>
              <Box
                className='Foot'
                sx={{
                  bgcolor: footColor,
                  minWidth: '100%',
                  minHeight: '8vh',
                  marginLeft: '-16px',
                  marginRight: '-16px',
                  marginBottom: '-8px',
                  paddingLeft: '30px',
                  paddingTop: '10px',
                  transition: 'background-color 0.5s ease',
                }}
              >
                <Button
                  className='next-button'
                  variant='contained'
                  onClick={() => onClickNext({ type })}
                  disabled={answerIndex === null}
                  size='large'
                  sx={{
                    fontSize: '16px',
                    lineHeight: '22px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#FFFFFF',
                    backgroundColor: '#58CC02',
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderWidth: 2,
                    borderColor: '#E5E5E5',
                    zIndex: 1500,
                    ':hover': {
                      borderWidth: 2,
                      boxShadow: 'none',
                      backgroundColor: '#48b300',
                    },
                    ':active': {
                      borderWidth: 2,
                      boxShadow: 'none',
                      backgroundColor: '#378803',
                      zIndex: 1200,
                    },
                  }}
                >
                  Następne pytanie
                </Button>
              </Box>
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
        </Box>
      </Grid>

      {/* Right Banner */}
      <Grid item xs={3} sm={2} md={2}>
        <Box
          p={2}
          //   bgcolor='lightyellow'
          sx={{
            borderRadius: 8,
            maxHeight: '76vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', // Prevents content overflow
          }}
        >
          <SideBanner
            banners={banners.right}
            currentQuestion={currentQuestion}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
