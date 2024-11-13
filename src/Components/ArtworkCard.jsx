import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from "react-router-dom"
import { fetchArtworks1, fetchArtworksbyId } from "../../utils"

const ArtworkCard = ({thisArtwork}) => {
    const [artwork, setArtwork] = useState(thisArtwork || null)
    const { artwork_id } = useParams()
    const { addToCollection } = useContext(UserContext)
    const naviagte = useNavigate()
    
    const handleClick = () => {
        naviagte(`${artwork.id}`)
    }
    
    useEffect(() => {
        if(!thisArtwork && artwork_id){
            fetchArtworksbyId(artwork_id).then((art) => {
                setArtwork(art)
            }).catch((error) => {
                console.error(error)
            })
        }
    }, [artwork_id, thisArtwork])

    if(!artwork){
        return (
            <p>Loading artwork...</p>
        )
    }

    if(artwork_id){
        return (
            <>
            <div className="artwork-card">
            <img className="artwork-card-image" width={480} src={ artwork?.images?.web?.url || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
            />
            <div className="artwork-card-words">
            <h4 className="artwork-card-title">{artwork.title}</h4>
            <h4>{artwork.creation_date}</h4>
            <p>{artwork.description}</p>
            </div>
            </div>
            </>
        )
    }

    return (
        <>
        <div>
        <h4 className="artwork-list-title" onClick={handleClick}>{artwork.title}</h4>
        <img className="artwork-list-image"
          src={ artwork?.images?.web?.url || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
        />
        </div>
        <button className="artwork-button" onClick={() => addToCollection(artwork)}>+</button>
        </>
    )
}

export default ArtworkCard