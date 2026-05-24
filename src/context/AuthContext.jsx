import {
    createContext,
    useEffect,
    useState,
  } from 'react'
  
  import {
    onAuthStateChanged,
    signOut,
  } from 'firebase/auth'
  
  import { auth } from '../firebase'
  
  export const AuthContext = createContext()
  
  export default function AuthProvider({ children }) {
  
    const [user, setUser] = useState(null)
  
    useEffect(() => {
  
      const unsubscribe = onAuthStateChanged(
        auth,
        (currentUser) => {
  
          setUser(currentUser)
  
        }
      )
  
      return () => unsubscribe()
  
    }, [])
  
    const logout = async () => {
  
      await signOut(auth)
  
    }
  
    return (
      <AuthContext.Provider
        value={{
          user,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }