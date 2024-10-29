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
import { fetchArtworks1 } from "../utils"

function App() {
  const [allArtwork, setAllArtwork] = useState([])

  
//   useEffect(() => {
//     const getAllArtworks = async () => {
//         const [ artworks2] = await Promise.all([
//             fetchArtworks2()
//         ])
//         // const formattedArtwork1 = artworks1.map(artwork => ({
//         //     id: artwork.id,
//         //     title: artwork.title,
//         //     artist: artwork.creators?.[0]?.description || "Unknown artist",
//         //     image: artwork.images?.web?.url || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
//         // }))
//         const formattedArtwork2 = artworks2.map(artwork => ({
//             id: artwork.id,
//             title: artwork.title,
//             artist: artwork.people.name,
//             image: artwork.images.baseimageurl
//         }))
//         const allNewArtwork = [...formattedArtwork2]
//         setAllArtwork(allNewArtwork)
//     }
//     getAllArtworks()
// }, [])
const handleSearch = (searchTerm) => {
  fetchArtworks1(searchTerm).then((artworks) => {
    setAllArtwork(artworks)
  })
}


  return (
    <UserProvider>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artworks' element={<ArtworkList allArtwork={allArtwork} onSearch={handleSearch}/>}/>
        <Route path='/artworks/:artwork_id' element={<ArtworkCard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App
