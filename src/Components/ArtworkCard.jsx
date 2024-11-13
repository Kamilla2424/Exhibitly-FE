import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from "react-router-dom"
import { fetchArtworksbyId } from "../../utils"

const ArtworkCard = ({thisArtwork}) => {
    const [artwork, setArtwork] = useState(thisArtwork || null)
    const { artwork_id } = useParams()
    const { loggedInUser, addToCollection } = useContext(UserContext)
    const naviagte = useNavigate()
    const [added, setAdded] = useState(false)
    
    const handleClick = () => {
        naviagte(`${artwork.id}`)
    }

    const handleAddToCollection = () => {
        if(loggedInUser){
            addToCollection(artwork)
            setAdded(true)
        }else{
            alert("Please log in or sign up to add items to your collection.")
        }
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
        <div className="artwork-list-item">
        <h4 className="artwork-list-title" onClick={handleClick}>{artwork.title}</h4>
        <img className="artwork-list-image" onClick={handleClick}
          src={ artwork?.images?.web?.url || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
        />
        <button className="artwork-button" onClick={handleAddToCollection}>+</button>
        {added && <p>Added to Exhibition</p>}
        </div>
        </>
    )
}

export default ArtworkCard