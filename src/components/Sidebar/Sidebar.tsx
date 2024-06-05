import { Typography, theme } from 'antd'
import React from 'react'
import Navigation from './Navigation/Navigation'

const Sidebar: React.FC = () => {
	const { Title } = Typography
	const {
		token: { colorWhite },
	} = theme.useToken()

	return (
		<>
			<Title level={2} style={{ color: colorWhite, paddingLeft: '20px', paddingTop: '20px' }}>
				E-commerce Admin
			</Title>
			<Navigation />
		</>
	)
}

export default Sidebar
