/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Unstable_Grid2 as Grid,
  Button,
  LinearProgress,
  Typography,
} from '@mui/material'
import { useState, useEffect } from 'react'
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
  module,
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
  const [startTime, setStartTime] = useState(null) // Track start time of quiz
  const [actionTimes, setActionTimes] = useState([]) // Track proceeding to next task
  const [quizData, setQuizData] = useState([]); // Store the quiz data

  useEffect(() => {
    // Record the start time when QuizScaffold is invoked
    const startTime = new Date();
    setStartTime(startTime);

    const initialTimestamp = Math.floor(startTime.getTime() / 1000); // Unix timestamp in seconds
    setQuizData([
      {
        timestamp: initialTimestamp,
        score: 0,
        correctSum: 0,
        wrongSum: 0,
        answer: 0,
      },
    ]);
  }, []);

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
  // const onClickNext = () => {
  //   setAnswerIndex(null)
  //   setSentence([])
  //   console.log('answer: ', { answer })
  //   console.log('correctanswer: ', { correctAnswer })
  //   setResult((prev) =>
  //     answer === correctAnswer
  //       ? (setFootColor('#89E219'),
  //       {
  //         ...prev,
  //         score: prev.score + 1,
  //         correctAnswers: prev.correctAnswers + 1,
  //       })
  //       : (setFootColor('#FF4B4B'),
  //       {
  //         ...prev,
  //         wrongAnswers: prev.wrongAnswers + 1,
  //       })
  //   )
  //   setTimeout(() => {
  //     if (currentQuestion !== questions.length - 1) {
  //       setCurrentQuestion((prev) => prev + 1)
  //     } else {
  //       setElapsedTime(quizTime - counter)
  //       setShowResult(true)
  //     }
  //     setFootColor('white')
  //     setAnswerIndex(null)
  //     const actionTime = new Date()
  //     setActionTimes((prevTimes) => [...prevTimes, actionTime])
  //   }, 800)
  // }

  const onClickNext = () => {
    setAnswerIndex(null)
    setSentence([])
    console.log('answer: ', { answer })
    console.log('correctanswer: ', { correctAnswer })
    console.log('answer lowercase: ', answer.trim().toLowerCase())
    console.log('correctanswer lowercase: ', correctAnswer.trim().toLowerCase())
    setResult((prev) =>
      answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
        ? (setFootColor('#89E219'),
        {
          ...prev,
          score: prev.score + 1,
          correctAnswers: prev.correctAnswers + 1,
        })
        : (setFootColor('#FF4B4B'),
        {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        })
    )

    const isCorrect = answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    const timestamp = Math.floor(new Date().getTime() / 1000); // Unix timestamp in seconds

    // Determine new score and sums based on the previous data
    const previousData = quizData.length ? quizData[quizData.length - 1] : { score: 0, correctSum: 0, wrongSum: 0 };
    const newScore = previousData.score + (isCorrect ? 1 : -1);
    const newCorrectSum = previousData.correctSum + (isCorrect ? 1 : 0);
    const newWrongSum = previousData.wrongSum + (isCorrect ? 0 : 1);

    setQuizData((prevData) => [
      ...prevData,
      {
        timestamp,
        score: newScore,
        correctSum: newCorrectSum,
        wrongSum: newWrongSum,
        answer: isCorrect ? 1 : -1,
      },
    ]);

    setTimeout(() => {
      if (currentQuestion !== questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
      } else {
        setElapsedTime(quizTime - counter)
        setShowResult(true)
      }
      setFootColor('white')
      setAnswerIndex(null)
      const actionTime = new Date()
      setActionTimes((prevTimes) => [...prevTimes, actionTime])
    }, 800)
  }

  const exportResultsToFile = () => {
    const headers = "timestamp,score,correctSum,wrongSum,answer";
    const resultsText = quizData.map(data =>
      `${data.timestamp},${data.score},${data.correctSum},${data.wrongSum},${data.answer}`
    ).join('\n');
  
    const csvContent = `${headers}\n${resultsText}`;
  
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
    const fileName = `${formattedDate}-results.csv`;
  
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
      {/* Top Banner */}
      <Grid item xs={12} sm={12} md={12}>
        <Box
          className='top-banner'
          p={2}
          // bgcolor='lightblue'
          sx={{
            // borderRadius: 8,
            minHeight: '7vh',
            maxHeight: '7vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            height: '100%',
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
            maxHeight: '76vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
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
            padding: '40px',
            borderRadius: '40px',
            borderColor: '#E5E5E5',
            minHeight: '75vh',
            maxHeight: '75vh',
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
                    <GuidebookDialog module={module} />
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
                  // bgcolor: 'lightblue',
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
                  marginLeft: '-40px',
                  marginRight: '-40px',
                  marginBottom: '-40px',
                  paddingLeft: '40px',
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
                    borderRadius: '12px',
                    paddingTop: '10px',
                    paddinLeft: '18px',
                    paggingRight: '18px',
                    paddingBottom: '10px',
                    fontSize: '16px',
                    lineHeight: '22px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#FFFFFF',
                    backgroundColor: '#58CC02',
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderWidth: 2,
                    borderColor: '#E5E5E5',
                    zIndex: 500,
                    ':hover': {
                      borderWidth: 2,
                      boxShadow: 'none',
                      backgroundColor: '#48b300',
                    },
                    ':active': {
                      borderWidth: 2,
                      boxShadow: 'none',
                      backgroundColor: '#378803',
                    },
                  }}
                >
                  Następne pytanie
                </Button>
              </Box>
            </div>
          ) : (
            <div>
              <Typography
                sx={{
                  fontSize: '24px',
                  lineHeight: '30px',
                  color: '#000000',
                  fontWeight: 'bold',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '24px',
                }}
              >
                Wyniki
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#777777',
                  fontWeight: 'normal',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Punkty: {result.score}
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#777777',
                  fontWeight: 'normal',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Poprawne odpowiedzi: {result.correctAnswers}
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#777777',
                  fontWeight: 'normal',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Błędne odpowiedzi: {result.wrongAnswers}
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#777777',
                  fontWeight: 'normal',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Całkowity czas: {elapsedTime} s
              </Typography>
              <Link to='/'>
                <Button
                  variant='contained'
                  onClick={exportResultsToFile()}
                  size='large'
                  sx={{
                    marginTop: '24px',
                    borderRadius: '12px',
                    paddingTop: '10px',
                    paddinLeft: '18px',
                    paggingRight: '18px',
                    paddingBottom: '10px',
                    fontSize: '16px',
                    lineHeight: '22px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#FFFFFF',
                    backgroundColor: '#1CB0F6',
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderWidth: 2,
                    borderColor: '#E5E5E5',
                    ':hover': {
                      borderWidth: 2,
                      boxShadow: 'none',
                      backgroundColor: '#0083CB',
                    },
                    ':active': {
                      borderWidth: 2,
                      boxShadow: 'none',
                      backgroundColor: '#0068A4',
                    },
                  }}
                >
                  Zakończ
                </Button>
              </Link>
            </div>
          )}
        </Box>
      </Grid>

      {/* Right Banner */}
      <Grid item xs={3} sm={2} md={2}>
        <Box
          p={2}
          // bgcolor='lightyellow'
          sx={{
            // borderRadius: 8,
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
