import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../utils'
import { useState } from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate()
    const [userPassword, setUserPassword] = useState("")
    const [usernameInput, setUsernameInput] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleClick = () => {
        navigate('/signup')
    }
    
    const handleUsernameInput = (e) => {
        setUsernameInput(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setUserPassword(e.target.value)
    }

   const handleSubmit = (e) => {
       setLoading(true)
       e.preventDefault()
       setError("")
       if(!usernameInput || !userPassword){
        setError("Username and password are required")
        setLoading(false)
        return
       }
       loginUser({username: usernameInput, password: userPassword})
       .then(({user}) => {
            setLoggedInUser(user)
            navigate('/')
       }).catch((err) => {
            setIsValid(false)
            setError(err)
       }).finally(() => {
            setLoading(false)
       })
        
   }


    return (
        <div className="login-box">
        <label className='login'>
                Username:
        </label>
            <input className="login-input" type="text" id="username" onChange={handleUsernameInput} required></input>
        <label className='login'>
                Password:
        </label>
            <input className="login-input" type="password" id="password" onChange={handlePasswordInput} required></input>
        <button type="submit" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
        </button>
        
        {!isValid && <p style={{ color: 'red' }}>{error}</p>}
        <p>Don't have an account?</p>
        <button onClick={handleClick}>Sign Up</button>
        </div>
    )
}

export default Login