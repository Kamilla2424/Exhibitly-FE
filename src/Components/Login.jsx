import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../utils'
import { useState } from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate()
    const [userPassword, setUserPassword] = useState("")
    const [usernameInput, setUsernameInput] = useState("")
    const [isValid, setIsValid] = useState(true)

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
       e.preventDefault()
       fetchUsers().then(({users}) => {
           const filteredUsers = users.filter(user => user.username === usernameInput)
            if(filteredUsers.length === 0){
                setIsValid(false)
                return
            }
            if(filteredUsers[0].password === userPassword){
                setIsValid(true)
                setLoggedInUser(filteredUsers[0])
                navigate("/")
            }else{
                setIsValid(false)
            }
        }).catch((error) => {
            console.error("Error fetching users:", error)
            setIsValid(false)
        })
        
   }


    return (
        <div className="login-box">
        <label className='login'>
                Username:
            </label>
                <input className="login" type="text" id="username" onChange={handleUsernameInput} required></input>
                <label className='login'>
                Password:
            </label>
                <input className="login" type="password" id="password" onChange={handlePasswordInput} required></input>
        <button type="submit" onClick={handleSubmit}>Login</button>
        {!isValid && <p style={{ color: 'red' }}>Invalid username or password</p>}
        <a>Don't have an account?</a>
        <button onClick={handleClick}>Sign Up</button>
        </div>
    )
}

export default Login