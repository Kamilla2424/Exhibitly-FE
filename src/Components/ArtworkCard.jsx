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
    console.log(artwork)

    if(artwork_id){
        return (
            <>
            <div>
            <img width={480} src={ artwork?.images?.web?.url || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
            />
            <h4>{artwork.title}</h4>
            <h4>{artwork.creation_date}</h4>
            <a>{artwork.description}</a>
            </div>
            </>
        )
    }

    return (
        <>
        <div className="artworklist-page-card">
        <img width={480}
          src={ artwork?.images?.web?.url || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
        />
        <h4 onClick={handleClick}>{artwork.title}</h4>
        </div>
        <button onClick={() => addToCollection(artwork)}>+</button>
        </>
    )
}

export default ArtworkCard