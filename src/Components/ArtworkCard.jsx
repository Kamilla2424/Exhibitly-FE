import { Link } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from './UserContext'

const ArtworkCard = ({artwork, allArtwork}) => {
    const { addToCollection } = useContext(UserContext)

    if (!artwork) {
        return <p>Loading...</p>
    }

    const handleAdd = () => {
        addToCollection(artwork)
    }

    return (
        <Link to={`/artworks/${artwork.id}`} className='artwork-card'>
            <h4>{artwork.title}</h4>
            <div className='artwork-card-content'>
            <img className='artwork-img' src={artwork.image || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} width={480}/>
            <p>{artwork.artist_name}</p>
            <button onClick={handleAdd}>+</button>
            </div>
        </Link>
    )
}

export default ArtworkCard