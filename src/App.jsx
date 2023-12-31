import { useState } from 'react'
import './App.css'
import {Home} from './pages/Home';
import {CreateTask} from './pages/CreateTask';
import {Quiz} from './pages/Quiz';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-task' element={<CreateTask/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
