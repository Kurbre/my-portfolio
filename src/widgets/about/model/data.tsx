import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'

export const skillsData = [
	{
		id: 'frontend',
		icon: <RiComputerLine size={28} />,
		title: 'Front-end розробка',
		description:
			'Це розробка користувацького інтерфейсу сайтів і веб-додатків із акцентом на візуальну частину.'
	},
	{
		id: 'backend',
		icon: <FaServer size={21} />,
		title: 'Back-end розробка',
		description:
			'Це розробка серверної частини додатків, робота з базами даних, логікою та API для забезпечення коректної роботи веб-додатків.'
	}
]
