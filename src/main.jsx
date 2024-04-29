/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { quizQuestions } from './constants'
import { banners } from './constants'
import Homepage from './screens/Homepage.jsx'
import QuizScaffold from './screens/QuizScaffold.jsx'
import Relaxation from './screens/Relaxation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    
  },
  {
    path: '/quizone',
    element: <QuizScaffold questions={quizQuestions.questionsOne} banners={banners.QuizOne}/>,
  },
  {
    path: '/quiztwo',
    element: <QuizScaffold questions={quizQuestions.questionsTwo} banners={banners.QuizTwo}/>,
  },
  {
    path: '/quizthree',
    element: <QuizScaffold questions={quizQuestions.questionsThree} banners={banners.QuizThree}/>,
  },

  {
    path: '/relaxation',
    element: <Relaxation/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
