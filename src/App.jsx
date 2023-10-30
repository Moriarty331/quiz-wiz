import { useState } from 'react'
import './App.css'
import {Home} from './pages/Home';
import {CreateTask} from './pages/CreateTask';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='Create-task' element={<CreateTask/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
