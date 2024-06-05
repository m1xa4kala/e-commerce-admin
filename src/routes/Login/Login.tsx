import React from 'react'
import useTitle from '../../hooks/title'

const Login: React.FC = () => {
	useTitle()
	return (
		<div>
			<form>
				<h1>E-commerce Admin</h1>
				<label htmlFor='email'>Email</label>
				<input name='email' placeholder='admin@admin.com' type='email' />
				<label htmlFor='password'>Password</label>
				<input name='password' placeholder='******' type='password' />
				<button>Login</button>
			</form>
		</div>
	)
}

export default Login
