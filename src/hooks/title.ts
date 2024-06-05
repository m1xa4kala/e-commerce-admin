import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useTitle = () => {
	const location = useLocation()
	const pathname = location.pathname.slice(1)
	const title = pathname ? `E-commerce Admin - ${pathname[0].toUpperCase() + pathname.slice(1)}` : 'E-commerce Admin'
	useEffect(() => {
		document.title = title
	}, [title])
}

export default useTitle
