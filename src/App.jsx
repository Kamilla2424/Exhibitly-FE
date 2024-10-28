import { useEffect, useState } from "react"
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
import { fetchArtworks1, fetchArtworks2 } from "../utils"

function App() {
  const [allArtwork, setAllArtwork] = useState([])

  useEffect(() => {
    const getAllArtworks = async () => {
        const [artworks1, artworks2] = await Promise.all([
            fetchArtworks1(),
            fetchArtworks2()
        ])
        const formattedArtwork1 = artworks1.map(artwork => ({
            id: artwork.id,
            title: artwork.title,
            artist: artwork.artist_title,
            image: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
        }))
        const formattedArtwork2 = artworks2.map(artwork => ({
            id: artwork.id,
            title: artwork.title,
            artist: artwork.people.name,
            image: artwork.images.baseimageurl
        }))
        const allNewArtwork = [...formattedArtwork1, ...formattedArtwork2]
        setAllArtwork(allNewArtwork)
    }
    getAllArtworks()
}, [])

  return (
    <UserProvider>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artworks' element={<ArtworkList allArtwork={allArtwork}/>}/>
        <Route path='/artworks/:artwork_id' element={<ArtworkCard allArtwork={allArtwork}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App
