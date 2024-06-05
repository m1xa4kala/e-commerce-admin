import { Menu } from 'antd'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import items from './items'

const Navigation: React.FC = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const itemClickHandler: MenuClickEventHandler = item => {
		navigate(item.key)
	}
	return <Menu onClick={item => itemClickHandler(item)} items={items} theme='dark' selectedKeys={[location.pathname]} />
}

export default Navigation
