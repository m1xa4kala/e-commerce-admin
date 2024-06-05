import { createContext, useContext, useState } from 'react'
import { fakeAuth } from '../api/api'

type AuthContextType = {
	user: null | string
	signIn: (cb: () => unknown) => void
	signOut: (cb: () => unknown) => void
}

const defaultContext: AuthContextType = {
	user: null,
	signIn: () => null,
	signOut: () => null,
}

export const authContext = createContext<AuthContextType>(defaultContext)

export function useAuth() {
	return useContext(authContext)
}

export function useProvideAuth() {
	const [user, setUser] = useState('')

	const signIn = (cb: () => unknown) => {
		return fakeAuth.signIn(() => {
			setUser('user')
			cb()
		})
	}

	const signOut = (cb: () => unknown) => {
		return fakeAuth.signOut(() => {
			setUser('')
			cb()
		})
	}

	return {
		user,
		signIn,
		signOut,
	}
}
