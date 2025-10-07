import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { ToggleTheme } from '../../../features/toggle-theme'
import { useTheme } from '../../../shared/theme'
import backgroundOne from '../assets/background1.png'
import HamburgerIcon from '../assets/Hamburger.svg?react'

const Header = () => {
	const { isDarkTheme } = useTheme()

	return (
		<header className='w-full h-[800px] flex items-center relative bg-linear-to-br from-blue-400 to-blue-200 dark:from-gray-900  dark:to-gray-700'>
			<button className='absolute right-8 top-5 cursor-pointer'>
				<HamburgerIcon fill={isDarkTheme ? '#fff' : '#000'} />
			</button>
			<Container className='flex items-center justify-between gap-5 h-full'>
				<div>
					<Subtitle>Меня зовут Илья</Subtitle>
					<h2 className='text-5xl max-w-[480px] dark:text-white'>
						Я web-разработчик из Украины
					</h2>
					<ToggleTheme />
				</div>
				<div className='flex justify-end items-end absolute right-28 -bottom-[153px]'>
					<img
						src={backgroundOne}
						alt='Background'
						className='w-full bg-no-repeat bg-bottom bg-cover'
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header
