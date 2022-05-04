import './App.css'
import React from 'react'

import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";

import Login from './Components/Login'
import ForgetPass from './Components/ForgetPass'

const App = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/FgtPass" element={<ForgetPass/>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App