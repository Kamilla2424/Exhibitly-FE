import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import ArtworkList from './Components/ArtworkList'
import NoMatch from './Components/NoMatch'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artworks' element={<ArtworkList/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  )
}

export default App
