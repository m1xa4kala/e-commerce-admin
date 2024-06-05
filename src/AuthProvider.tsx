import React from 'react'
import { authContext, useProvideAuth } from './hooks/auth'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const auth = useProvideAuth()
	return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default AuthProvider
