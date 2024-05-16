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
                variant='outlined'
                size='large'
                sx={{
                  borderRadius: '12px',
                  paddingTop: '8px',
                  paddinLeft: '16px',
                  paggingRight: '16px',
                  paddingBottom: '8px',
                  color: answerIndex === index ? '#2B70C9' : '#4B4B4B',
                  fontSize: '20px',
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'none',
                  marginBottom: '8px',
                  width: '480px',
                  borderWidth: 2,
                  backgroundColor:
                    answerIndex === index ? '#E3F5FE' : 'transparent',
                  borderColor: answerIndex === index ? '#1CB0F6' : '#E5E5E5',
                  boxShadow: 'none',
                  ':hover': {
                    borderWidth: 2,
                    boxShadow: 'none',
                    borderColor: answerIndex === index ? '#2B70C9' : '#1CB0F6',
                    backgroundColor: '#E3F5FE',
                  },
                  ':active': {
                    borderWidth: 2,
                    boxShadow: 'none',
                    borderColor: '1CB0F6',
                    backgroundColor: '#CAECFD',
                    zIndex: 1200,
                  },
                }}
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
            Ułóż zdanie
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
                    borderTop: 2,
                    borderBottom: 2,
                    minHeight: 70,
                    borderColor: '#E5E5E5',
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
                            fontSize: '20px',
                            color: '#4B4B4B',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '500',
                            borderRadius: '12px',
                            paddingTop: '8px',
                            paddinLeft: '16px',
                            paggingRight: '16px',
                            paddingBottom: '8px',
                            marginTop: '8px',
                            marginLeft: '4px',
                            marginRight: '4px',
                            marginBottom: '8px',
                            paddingLeft: '12px',
                            paddingRight: '12px',
                            alignContent: 'center',
                            backgroundColor: 'white',
                            border: '2px solid #E5E5E5',
                            display: 'inline-block',
                            ':hover': {
                              backgroundColor: '#E3F5FE',
                              color: '#4B4B4B',
                              border: '2px solid #1CB0F6',
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
              marginTop: '36px',
              marginBottom: '36px',
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
                size='large'
                sx={{
                  borderRadius: '12px',
                  paddingTop: '8px',
                  paddinLeft: '16px',
                  paggingRight: '16px',
                  paddingBottom: '8px',
                  marginTop: '4px',
                  marginLeft: '4px',
                  marginRight: '4px',
                  marginBottom: '4px',
                  color: '#4B4B4B',
                  fontSize: '20px',
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: 'transparent',
                  border: 'solid 2px #E5E5E5',
                  textTransform: 'none',
                  ':hover': {
                    backgroundColor: '#E3F5FE',
                    // border: 'solid 2px #E5E5E5',
                    border: '2px solid #1CB0F6',
                  },
                  ':disabled': {
                    backgroundColor: '#E5E5E5',
                    border: 'solid 2px #E5E5E5',
                    color: '#E5E5E5',
                  },
                  ':disabled:hover': {
                    backgroundColor: '#E5E5E5',
                    border: 'solid 2px #E5E5E5',
                    color: '#E5E5E5',
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
