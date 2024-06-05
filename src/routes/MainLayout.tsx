import { Layout, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout: React.FC = () => {
	const {
		token: { colorBgContainer, borderRadiusSM },
	} = theme.useToken()
	return (
		<>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider>
					<Sidebar />
				</Sider>
				<Layout>
					<Content
						style={{ margin: '16px', backgroundColor: colorBgContainer, borderRadius: borderRadiusSM, padding: '16px' }}
					>
						<Outlet />
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						E-commerce Admin ©{new Date().getFullYear()} Created by m1xa4kala
					</Footer>
				</Layout>
			</Layout>
		</>
	)
}

export default MainLayout
