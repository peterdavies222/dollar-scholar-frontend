import { useState, useEffect } from 'react'
import UserAPI from './UserAPI'
import {BrowserRouter as BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import '@shoelace-style/shoelace/dist/themes/light.css';
import './styles/master.scss'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/');

import WelcomeView from './views/WelcomeView';
import SignInView from './views/SignInView'
import SignUpView from './views/SignUpView'

import LearnView from './views/LearnView'
import ReviseView from './views/ReviseView'
import LeaderboardView from './views/LeaderboardView'
import ProfileView from './views/ProfileView'

import LessonModuleView from './views/lessons/LessonModuleView'
import LessonQuizView from './views/lessons/LessonQuizView'
import LessonSummaryView from './views/lessons/LessonSummaryView'

// this is a function which will redirect to the signin page if there is no user logged in (aka no token)
function ProtectedRoute({ token, currentUser, children }) {
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  if (!currentUser) {
    return <div>Loading...</div>
  }
  return children;
}

function App() {

  // the token is the user's ID
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [currentUser, setCurrentUser] = useState(null)

  // if there is a token (userID), then we will get the user associated with that token. 
  // we will then set the current user to that user.
  useEffect(()=> {
    if (!token) return

    const fetchUser = async () => {
      try {
        const user = await UserAPI.getUserById(token)
        setCurrentUser(user)
      } catch (err) {
        console.error("failed to fetch user: ", err)
      }
    }

    fetchUser()
  }, [token])
  
  useEffect(()=> {
    console.log('token = ', token, '. currentUser = ', currentUser)
  }, [token, currentUser])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeView />} />
          <Route path="/signin" element={<SignInView  setToken={setToken}/>} />
          <Route path="/signup" element={<SignUpView  setToken={setToken}/>} />
          <Route
          path="/learn"
          element={
            <ProtectedRoute token={token} currentUser={currentUser}>
              <LearnView currentUser={currentUser} />
            </ProtectedRoute>
          }
          />
          <Route
          path="/lessons/:lessonId/modules/:moduleNumber"
          element={
            <ProtectedRoute token={token} currentUser={currentUser}>
              <LessonModuleView currentUser={currentUser} />
            </ProtectedRoute>
          }
          />
          <Route
          path="/lessons/:lessonId/quiz/:questionNumber"
          element={
            <ProtectedRoute token={token} currentUser={currentUser}>
              <LessonQuizView currentUser={currentUser} />
            </ProtectedRoute>
          }
          />
          <Route
          path="/lessons/:lessonId/summary"
          element={
            <ProtectedRoute token={token} currentUser={currentUser}>
              <LessonSummaryView currentUser={currentUser} />
            </ProtectedRoute>
          }
          />
          <Route
          path="/revise"
          element={
            <ProtectedRoute token={token} currentUser={currentUser}>
              <ReviseView currentUser={currentUser}/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/leaderboard"
          element={
            <ProtectedRoute token={token} currentUser={currentUser}>
              <LeaderboardView currentUser={currentUser}/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/profile"
          element={
            <ProtectedRoute token={token} currentUser={currentUser}>
              <ProfileView currentUser={currentUser} setCurrentUser={setCurrentUser} setToken={setToken}/>
            </ProtectedRoute>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
