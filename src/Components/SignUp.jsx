import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postUser } from "../../utils"
import { useContext } from 'react'
import { UserContext } from './UserContext'

const SignUp = () => {
    const { setLoggedInUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [usernameInput, setUsernameInput] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [isValid, setIsValid] = useState(true)
    
    const handleUsernameInput = (e) => {
        setUsernameInput(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setUserPassword(e.target.value)
    }

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
       }
    
    return (
        <div>
            <form className="signup-box" onSubmit={handleSubmit}>
            <label>
                Username:
            </label>
                <input onChange={handleUsernameInput} className="signup-input" type="text" id="username" required></input>
            <label>
            Email Address:
            </label>
                <input onChange={handleEmailInput} className="signup-input" type="email" id="email" required></input>
            <label>
                Password:
            </label>
                <input onChange={handlePasswordInput} className="signup-input" type="password" id="password" required></input>
                {!isValid && <p style={{ color: 'red' }}>That username or email is already taken - pick a new one</p>}
            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp