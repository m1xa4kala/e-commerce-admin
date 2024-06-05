import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import Categories from './routes/Categories/Categories'
import Dashboard from './routes/Dashboard/Dashboard'
import Login from './routes/Login/Login'
import MainLayout from './routes/MainLayout'
import Products from './routes/Products/Products'
import Reviews from './routes/Reviews/Reviews'
import Users from './routes/Users/Users'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: '/users',
				element: <Users />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/categories',
				element: <Categories />,
			},
			{
				path: '/reviews',
				element: <Reviews />,
			},
		],
	},
	{
		path: '/sign-in',
		element: <Login />,
	},
])

export default router
