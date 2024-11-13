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
        <div>
            <h2>Welcome, {loggedInUser.username}!</h2>
            <button onClick={handleClick}>Logout</button>
            <h2>My Exhibition</h2>
            {exhibition.map((artwork) => {
            return (
                    <ArtworkCard key={artwork.id} artwork={artwork}/>
            )
            })}
        </div>
    )
}

export default Profile