/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useEffect } from "react"
import "./Task.css";
import { Button, Typography } from '@mui/material';


const Task = ({ type, question, choices, onAnswerClick, answerIndex, sentence, setSentence }) => {

    useEffect(() => {
        console.log("use effect: ", sentence.join(" "));
        onAnswerClick(sentence.join(' '))
    }, [sentence]);

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return; // Exit the function if dropped outside the droppable area
        }
        console.log(result)
        const items = Array.from(sentence)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setSentence(items)
    }

    const removeWord = (index) => {
        const newSentence = [...sentence];
        newSentence.splice(index, 1);
        setSentence(newSentence);
    };

    switch (type) {
        case 'single-choice':
            return (
                <div className='task-container'>
                    <Typography sx={{
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000",
                        fontWeight: "bold",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: "24px"
                    }}>
                        Wybierz poprawną odpowiedź
                    </Typography>
                    <Typography sx={{
                        fontSize: "24px",
                        lineHeight: "30px",
                        color: "#000000",
                        fontWeight: "bold",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: "24px",
                        maxWidth: "100%",
                        textAlign: "center"
                    }}>
                        {question}
                    </Typography>
                    {/* <ul>
                        {choices.map((choice, index) => (
                            <li
                                key={choice}
                                onClick={() => onAnswerClick(choice, index)}
                                className={answerIndex === index ? "selected-answer" : null}
                            >
                                {choice}
                            </li>
                        ))}
                    </ul> */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {choices.map((choice, index) => (
                            <Button
                                key={choice}
                                onClick={() => onAnswerClick(choice, index)}
                                variant={answerIndex === index ? "contained" : "outlined"}
                                color="primary"
                                sx={{ marginBottom: "16px", width: "480px" }}
                            >
                                {choice}
                            </Button>
                        ))}
                    </div>
                </div>
            )
        case 'create-sentence':
            return (<div className='task-container'>
                <Typography sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    color: "#000000",
                    fontWeight: "bold",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: "24px"
                }}>
                    Wybierz poprawną odpowiedź
                </Typography>
                <Typography sx={{
                    fontSize: "24px",
                    lineHeight: "30px",
                    color: "#000000",
                    fontWeight: "bold",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: "24px",
                    maxWidth: "100%",
                    textAlign: "center"
                }}>
                    {question}
                </Typography>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters" direction="horizontal">
                        {(provided) => (
                            <div className='draggable-container' style={{ display: 'flex', justifyContent: "center" }} {...provided.droppableProps} ref={provided.innerRef}>
                                {sentence.map((word, index) => (
                                    <Draggable key={word} draggableId={word} index={index}>
                                        {(provided) => (
                                            <div className="draggable-words" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
                                                onClick={() => removeWord(index)}
                                            >
                                                {word}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>

                        )}
                    </Droppable>
                </DragDropContext>

                <div className='choices-container'>{choices.map((choice, index) => (
                    <button
                        className='choice-button'
                        key={choice}
                        onClick={() => {
                            setSentence(prevSentence => [...prevSentence, choice]);
                        }}
                        disabled={sentence.includes(choice)}
                    >
                        {choice}
                    </button>
                ))}</div>
            </div>
            )
        default:
            return null;
    }
};

export default Task;