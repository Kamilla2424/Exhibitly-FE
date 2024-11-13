import { UserContext } from './UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const { exhibition } = useContext(UserContext)
    const { loggedInUser } = useContext(UserContext)

return (
    <>
    <div className='header'>
    <div className="header-links">
    <Link to='/artworks' className='header-link'>Search</Link>
    </div>
    <Link to='/' className="header-title">Exhibitly</Link>
    {loggedInUser ? (
        <div className='header-profile'>
        <Link to="/profile" >Profile</Link>
        <a>|</a>
        <a>🖼️ {exhibition.length}</a>
        </div>
        ) : (
        <Link to="/login" className='header-link'>Login</Link>
        )}
    </div>
    </>
    )
}

export default Header