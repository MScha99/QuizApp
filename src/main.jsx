import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { quizQuestions } from './constants'
import Homepage from './screens/Homepage.jsx'
import QuizOne from './screens/QuizOne.jsx'
import QuizTwo from './screens/QuizTwo.jsx'
import QuizThree from './screens/QuizThree.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/quizone',
    element: <QuizOne questions={quizQuestions.questionsOne} />,
  },
  {
    path: '/quiztwo',
    element: <QuizTwo questions={quizQuestions.questionsOne} />,
  },
  {
    path: '/quizthree',
    element: <QuizThree questions={quizQuestions.questionsOne} />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
