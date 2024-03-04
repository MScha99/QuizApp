/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { resultInitialState } from "../constants"
import Timer from "./Timer"



const Quiz = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answerIndex, setAnswerIndex] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [result, setResult] = useState(resultInitialState)
    const [showResult, setShowResult] = useState(false)
    const {type, question, choices, correctAnswer} = questions[currentQuestion]

    const onAnswerClick = (answer, index) => {
        setAnswerIndex(index)
        if (answer === correctAnswer) {
            setAnswer(true)
        }else {
            setAnswer(false)
        }
    }


    //update scores when user moves to next question; display results after last question
    const onClickNext = () => {
        setAnswerIndex(null)
        setResult((prev) =>
            answer ? {
                ...prev,
                score: prev.score + 1,
                correctAnswers: prev.correctAnswers +1
                }: {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers +1
                }
        )
        if (currentQuestion !==questions.length -1){
            setCurrentQuestion((prev)=> prev +1)
        } else setShowResult(true)
    }






    return <div className="quiz-container">
        {!showResult ? ( <div>
            <Timer/>
        <span> Pytanie {currentQuestion+1} / {questions.length}</span>
        <h2>{question}</h2>
        {type !=="create-sentence2" ? (<ul>
            {
                choices.map((choice, index)=> (
                    <li 
                    key={choice} 
                    onClick={()=> onAnswerClick (choice, index)}
                    className={answerIndex === index ? "selected-answer" : null}
                    >
                        {choice}
                    </li>
                ))
            }
        </ul>) : "TODO układanie zdania ze słówek"}
        
        <div>
            <button 
            onClick={onClickNext}
            disabled={answerIndex === null}
            >
                {currentQuestion === questions.length -1 ? "zakończ" : "następne pytanie"} 
            </button>
        </div>
        </div>) : <div>
            <h3>Wyniki</h3>
            <p>Punkty {result.score}</p>
            <p>Poprawne odpowiedzi {result.correctAnswers}</p>
            <p>Błędne odpowiedzi {result.wrongAnswers}</p>
            </div>}
       
    </div>
}

export default Quiz