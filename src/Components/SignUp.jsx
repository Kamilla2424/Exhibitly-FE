import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUsers, postUser } from "../../utils"
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
       fetchUsers().then(({users}) => {
           const filteredUsers = users.some(user => user.username === usernameInput)
           const filteredEmails = users.some(user => user.email_address === emailInput)
           if(filteredUsers || filteredEmails){
                setIsValid(false)
           }else{
            postUser({ username: usernameInput, password: userPassword, email_address: emailInput}).then(newUser => {
                setLoggedInUser(newUser)
                navigate('/profile')
            }).catch(error => {
                console.error("error", error)
            })
           }
       })}
    
    return (
        <div className="signup-box">
            <form onSubmit={handleSubmit}>
            <label className='signup'>
                Username:
            </label>
                <input onChange={handleUsernameInput} className="signup" type="text" id="username" required></input>
                <label className='signup'>
            <label className="signup">
            Email Address:
            </label>
                <input onChange={handleEmailInput} className="signup" type="email" id="email" required></input>
                Password:
            </label>
                <input onChange={handlePasswordInput} className="signup" type="password" id="password" required></input>
                {!isValid && <p style={{ color: 'red' }}>That username or email is already taken - pick a new one</p>}
            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp