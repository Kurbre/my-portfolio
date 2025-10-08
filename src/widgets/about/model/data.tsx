import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'

export const skillsData = [
	{
		id: Math.random() + Date.now(),
		icon: <RiComputerLine size={28} />,
		title: 'Front-end разработка',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		id: Math.random() + Date.now(),
		icon: <FaServer size={21} />,
		title: 'Back-end разработка',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
]
