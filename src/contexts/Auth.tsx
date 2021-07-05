import { 
  createContext, 
  ReactNode, 
  useEffect,
  useState, 
} from 'react'

import { firebase, auth } from '../services/firebase'

interface ProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  signInWithGoogle: () => void
}

interface UserProps {
  name: string
  email: string
  avatarUrl: string
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<UserProps>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, email } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Googal Account.')
        }

        setUser({
          name: displayName,
          avatarUrl: photoURL,
          email
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider

    const result = await auth.signInWithPopup(provider)

    setUser({
      name: result.user.displayName,
      avatarUrl: result.user.photoURL,
      email: result.user.email
    })

    console.log(user)
  }

  return (
    <AuthContext.Provider value={{
      signInWithGoogle
    }}>
      { children }
    </AuthContext.Provider>
  )
}
