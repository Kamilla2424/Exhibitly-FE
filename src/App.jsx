import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import ArtworkList from './Components/ArtworkList'
import NoMatch from './Components/NoMatch'
import './App.css'
import ArtworkCard from './Components/ArtworkCard'
import Profile from "./Components/Profile"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import { UserProvider } from './Components/UserContext'
import { fetchArtworks1 } from "../utils"
import PopUp from "./Components/PopUp"

function App() {
  const [allArtwork, setAllArtwork] = useState([])
  const [show, setShow] = useState(false)

  const handleSearch = (searchTerm) => {
    fetchArtworks1(searchTerm).then((artworks) => {
      setAllArtwork(artworks)
    })
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return (
    <UserProvider>
      <Header/>
      <PopUp handleClose={handleClose} show={show}/>
      <Routes>
        <Route path='/' element={<Home allArtwork={allArtwork}/>}/>
        <Route path='/artworks' element={<ArtworkList allArtwork={allArtwork} onSearch={handleSearch} handleShow={handleShow}/>}/>
        <Route path='/artworks/:artwork_id' element={<ArtworkCard handleShow={handleShow}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </UserProvider>
  )
}
  
export default App
  