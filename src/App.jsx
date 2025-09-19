import { useState } from 'react'
import Home from './Home'
import KnowMore from './KnowMore'
import Result from './Result'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/KnowMore" element={<KnowMore />} />
      <Route path="/Result" element={<Result />} />
    </Routes>
    
    </>
  )
}

export default App
