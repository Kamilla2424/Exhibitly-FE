import { UserContext } from './UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const { loggedInUser } = useContext(UserContext)


return (
    <>
    <div className='header'>
    <Link to='/' className="header-title">Exhibitly</Link>
    <div className="header-links">
    <Link to='/artworks' className='header-link'>Art</Link>
    </div>
    {loggedInUser ? (
        <button onClick={() => navigate('/profile')}>Profile</button>
        ) : (
        <Link to="/login" className='header-link'>Login</Link>
        )}
    </div>
    </>
    )
}

export default Header