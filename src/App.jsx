import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path='/' element={  <Home />}/>
        <Route path='/About' element={  <About />}/>
       
       
      </Routes>

    </Router>
  )
}

export default App