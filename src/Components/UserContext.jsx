import {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [exhibition, setExhibition] = useState([])
    
    const addToCollection = (artwork) => {
        setExhibition((oldExhibition) => [...oldExhibition, artwork])
    }

    return <UserContext.Provider value={{loggedInUser, setLoggedInUser, exhibition, setExhibition, addToCollection}}>
        {children}
    </UserContext.Provider>
}