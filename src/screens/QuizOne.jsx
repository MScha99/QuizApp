/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { resultInitialState } from '../constants'
import { Link } from 'react-router-dom'
import './Quiz.css'
import Timer from '../components/Timer'
import Task from '../components/Task'
import { Box, Button, LinearProgress, Typography } from '@mui/material'
import HomeDialog from '../components/HomeDialog'
import GuidebookDialog from '../components/GuidebookDialog'
import * as React from 'react';

const QuizOne = ({ questions }) => {
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
            <LinearProgress
                variant="determinate"
                value={(currentQuestion + 1) / questions.length * 100}
                sx={{
                    height: "16px",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    backgroundColor: "#E5E5E5",
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#58CC02',
                        borderRadius: '8px',
                    },
                }}
            />

            <div className='quiz-container'>
                {!showResult ? (
                    <div>
                        <div className='header'>
                            <div>
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "19px",
                                        color: "#777777",
                                        fontWeight: "bold",
                                        fontFamily: "Inter, sans-serif",
                                        marginBottom: "16px"
                                    }}>
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
                            <div className='main-buttons-container'>
                                <HomeDialog />
                                <GuidebookDialog />
                            </div>
                        </div>
                        <Box sx={{ height: "40px" }} />

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
                            <Button
                                variant="contained"
                                onClick={() => onClickNext({ type })}
                                disabled={answerIndex === null}
                                size="large"
                                sx={{
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    fontFamily: "Inter, sans-serif",
                                    color: "#FFFFFF",
                                    backgroundColor: "#58CC02",
                                    textTransform: "none",
                                    boxShadow: "none",
                                    borderWidth: 2,
                                    borderColor: "#E5E5E5",
                                    ":hover": {
                                        borderWidth: 2,
                                        boxShadow: "none",
                                        backgroundColor: "#48b300"
                                    },
                                    ":active": {
                                        borderWidth: 2,
                                        boxShadow: "none",
                                        backgroundColor: "#378803"
                                    }
                                }}
                            >
                                Następne pytanie
                            </Button>
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

export default QuizOne
