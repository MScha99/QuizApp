/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useEffect } from "react"
import "./Task.css";


const Task = ({ type, question, choices, onAnswerClick, answerIndex, sentence, setSentence }) => {


    useEffect(() => {
        console.log("use effect: ",sentence.join(" "));
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
        return (  <div>
            <h2 className="question-text">{question}</h2>
            <ul>{  choices.map((choice, index)=> (
                <li 
                key={choice} 
                onClick={()=> onAnswerClick (choice, index)}
                className={answerIndex === index ? "selected-answer" : null}
                >
                    {choice}
                </li>
            ))}</ul>
            </div>
          
        )
      case 'create-sentence':
        return (  <div>
            <h2>{question}</h2>


            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters" direction="horizontal">
                    {(provided) => (

            <div style={{ display: 'flex' }} {...provided.droppableProps} ref={provided.innerRef}
            > 
                {  sentence.map((word, index)=> (
                    <Draggable key={word} draggableId={word} index={index}>
                        {(provided)=> (
                <div className = "draggable-words" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
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



            <div>{  choices.map((choice, index)=> (
                <button 
                key={choice} 
                onClick={() => {
                    setSentence(prevSentence => [...prevSentence, choice]);
                    
                }}

                disabled={sentence.includes(choice)}
                className={"choice-create-sentence"}
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