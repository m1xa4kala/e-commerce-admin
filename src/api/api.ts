export const fakeAuth = {
	isAuthenticated: false,
	signIn(cb: () => unknown) {
		fakeAuth.isAuthenticated = true
		setTimeout(cb, 100) // fake async
	},
	signOut(cb: () => unknown) {
		fakeAuth.isAuthenticated = false
		setTimeout(cb, 100)
	},
}
