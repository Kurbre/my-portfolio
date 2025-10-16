import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'

export const skillsData = [
	{
		id: Math.random() + Date.now(),
		icon: <RiComputerLine size={28} />,
		title: 'Front-end разработка',
		description:
			'Это разработка пользовательского интерфейса сайтов и веб-приложений с упором на визуальную часть.'
	},
	{
		id: Math.random() + Date.now(),
		icon: <FaServer size={21} />,
		title: 'Back-end разработка',
		description:
			'Это разработка серверной части приложений, работа с базами данных, логикой и API для обеспечения корректной работы веб-приложений.'
	}
]
