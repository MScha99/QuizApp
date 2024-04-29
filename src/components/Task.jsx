/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useEffect } from 'react'
import { Button, Typography, Box } from '@mui/material'

const Task = ({
  type,
  question,
  choices,
  onAnswerClick,
  answerIndex,
  sentence,
  setSentence,
}) => {
  useEffect(() => {
    console.log('use effect: ', sentence.join(' '))
    onAnswerClick(sentence.join(' '))
  }, [sentence])

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return // Exit the function if dropped outside the droppable area
    }
    console.log(result)
    const items = Array.from(sentence)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setSentence(items)
  }

  const removeWord = (index) => {
    const newSentence = [...sentence]
    newSentence.splice(index, 1)
    setSentence(newSentence)
  }

  switch (type) {
    case 'single-choice':
      return (
        <div className='task-container'>
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
            Wybierz poprawną odpowiedź
          </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              lineHeight: '30px',
              color: '#000000',
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {choices.map((choice, index) => (
              <Button
                key={choice}
                onClick={() => onAnswerClick(choice, index)}
                variant={answerIndex === index ? 'contained' : 'outlined'}
                color='primary'
                sx={{ marginBottom: '16px', width: '480px' }}
              >
                {choice}
              </Button>
            ))}
          </div>
        </div>
      )
    case 'create-sentence':
      return (
        <div className='task-container'>
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
            Wybierz poprawną odpowiedź
          </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              lineHeight: '30px',
              color: '#000000',
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            {question}
          </Typography>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='characters' direction='horizontal'>
              {(provided) => (
                <Box
                  className='draggable-container'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    borderTop: 1,
                    borderBottom: 1,
                    minHeight: 70,
                    borderColor: '#d6d6d6',
                  }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {sentence.map((word, index) => (
                    <Draggable key={word} draggableId={word} index={index}>
                      {(provided) => (
                        <Box
                          className='draggable-words'
                          sx={{
                            borderRadius: '5px',
                            margin: 1,
                            padding: 2,
                            backgroundColor: '#fefdff',
                            border: '6px solid #d6d6d6',
                            display: 'inline-block',
                            ':hover': {
                              backgroundColor: '#4e487e',
                              color: '#f7f6f6',
                            },
                          }}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          onClick={() => removeWord(index)}
                        >
                          {word}
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>

          <Box
            className='choices-container'
            sx={{
              marginTop: '50px',
              marginBottom: '50px',
              marginLeft: 'auto',
              marginRight: 'auto',
              // maxWidth: '400px',
              maxWidth: '30vw',
              justifyContent: 'center',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {choices.map((choice, index) => (
              <Button
                className='choice-button'
                key={choice}
                onClick={() => {
                  setSentence((prevSentence) => [...prevSentence, choice])
                }}
                disabled={sentence.includes(choice)}
                sx={{
                  backgroundColor: '#fefdff',
                  border: 'solid 6px #d6d6d6',
                  margin: '5px',
                  textTransform: 'none',

                  ':hover': {
                    backgroundColor: '#4e487e',
                    border: 'solid 6px #d6d6d6',
                    color: '#f7f6f6',
                  },

                  ':disabled': {
                    backgroundColor: '#d6d6d6',
                    border: 'solid 6px #d6d6d6',
                    color: '#d6d6d6',
                  },

                  ':disabled:hover': {
                    backgroundColor: '#d6d6d6',
                    border: 'solid 6px #d6d6d6',
                    color: '#d6d6d6',
                  },
                }}
              >
                {choice}
              </Button>
            ))}
          </Box>
        </div>
      )
    default:
      return null
  }
}

export default Task
