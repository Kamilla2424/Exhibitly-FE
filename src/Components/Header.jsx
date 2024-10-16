import { Link } from 'react-router-dom'

const Header = () => {
    
return (
    <>
    <div className='header'>
    <h1 className="header-title">Exhibitly</h1>
    <div className="header-links">
    <Link to='/artworks' className='header-link'>Art</Link>
    </div>
    </div>
    </>
    )
}

export default Header