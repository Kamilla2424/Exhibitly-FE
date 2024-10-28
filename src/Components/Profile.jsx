import { UserContext } from './UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = ()=> {
        setLoggedInUser(null)
        navigate('/')
    }

    return (
        <div>
            <h2>Welcome, {loggedInUser.username}!</h2>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Profile