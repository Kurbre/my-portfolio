import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import backgroundOne from '../assets/background1.png'
import hamburgerIcon from '../assets/Hamburger.svg'
import { ToggleTheme } from '../../../features/toggle-theme'

const Header = () => {
	return (
		<header className='w-full h-[800px] flex items-center relative dark:bg-gray-900 '>
			<button className='absolute right-8 top-5 cursor-pointer'>
				<img src={hamburgerIcon} alt='Hamburger Icon' />
			</button>
			<Container className='flex items-center justify-between gap-5 h-full'>
				<div>
					<Subtitle>Меня зовут Илья Змей</Subtitle>
					<h2 className='text-5xl max-w-[480px] dark:text-white'>
						Я web-разработчик из города Запорожье
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
