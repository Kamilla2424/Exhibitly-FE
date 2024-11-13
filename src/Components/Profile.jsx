import { UserContext } from './UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ArtworkCard from './ArtworkCard'

const Profile = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const navigate = useNavigate()
    const { exhibition } = useContext(UserContext)

    const handleClick = ()=> {
        setLoggedInUser(null)
        navigate('/')
    }

    return (
        <div className='profile'>
            <h2>Welcome, {loggedInUser.username}!</h2>
            <h2>My Exhibition</h2>
            {exhibition.map((artwork) => {
                return (
                <>
                <div className="artwork-profile-card">
                <h4 className="artwork-profile-title">{artwork.title}</h4>
                <img className="artwork-profile-image" width={480} src={ artwork?.images?.web?.url || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
                />
                </div>
                </>
                    )
                })}
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Profile