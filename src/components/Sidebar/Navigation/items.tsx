import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
	{
		key: '/',
		label: 'Dashboard',
	},
	{
		key: '/users',
		label: 'Users',
	},
	{
		key: '/products',
		label: 'Products',
	},
	{
		key: '/categories',
		label: 'Categories',
	},
	{
		key: '/reviews',
		label: 'Reviews',
	},
]

export default items
