import { Link, useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()
	const navigate = useNavigate()
	return (
		<div id='error-page'>
			{error.status === 404 ? (
				<div>
					<h1>Page not found.</h1>
					<Link to={'/'}>Home</Link>
					<button onClick={() => navigate(-1)}>Go back</button>
				</div>
			) : (
				<div>
					<h1>Oops!</h1>
					<p>Something went wrong.</p>
					<Link to={'/'}>Home</Link>
					<button onClick={() => navigate(-1)}>Go back</button>
				</div>
			)}
		</div>
	)
}
