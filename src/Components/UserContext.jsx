import {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [exhibition, setExhibition] = useState([])
    
return <UserContext.Provider value={{loggedInUser, setLoggedInUser, exhibition, setExhibition}}>
        {children}
    </UserContext.Provider>
}