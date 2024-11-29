import { Link } from "react-router-dom"

const PopUp = ({handleClose, show}) => {
    if(!show){
        return null
    }

    return (
        <>
        <div className="popup-overlay" onClick={handleClose}></div>
        <div className="popup">
        <button onClick={handleClose}>✕</button>
            <p>You're not logged in</p>
            <Link to={"/login"} onClick={handleClose}>Login</Link>
            <p>Don't have an account?</p>
            <Link to={"/signup"} onClick={handleClose}>Sign Up</Link>
        </div>
        </>
    )
}

export default PopUp