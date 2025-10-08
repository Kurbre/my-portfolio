import {
	FaGithub,
	FaGithubSquare,
	FaInstagram,
	FaTelegram
} from 'react-icons/fa'
import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { ToggleTheme } from '../../../features/toggle-theme'
import { Button } from '../../../shared/ui/button'
import { Burger } from '../../../features/burger'
import backgroundOne from '../assets/background1.png'

const Header = () => {
	return (
		<header
			className='w-full h-[700px] md:h-[800px] flex items-center relative
		bg-gradient-to-br from-gray-300 to-gray-50
		dark:from-gray-900 dark:to-gray-700 overflow-hidden shadow-lg'
		>
			<Burger />
			<div className='rotate-270 font-sans font-semibold text-lg flex items-center gap-3 -ml-32 md:-ml-21'>
				<span className='whitespace-nowrap'>Социальные сети</span>
				<div className='w-10 h-[2px] bg-black dark:bg-white' />
				<a rel='stylesheet' href='https://github.com/Kurbre' target='_blank'>
					<FaGithub size={21} />
				</a>
				<a rel='stylesheet' href='https://github.com/Marald12' target='_blank'>
					<FaGithubSquare size={21} />
				</a>
				<a
					rel='stylesheet'
					href='https://instagram.com/illiya_zmey'
					target='_blank'
				>
					<FaInstagram size={21} />
				</a>
				<a rel='stylesheet' href='https://t.me/illiya228' target='_blank'>
					<FaTelegram size={21} />
				</a>
			</div>
			<Container className='flex items-center justify-between gap-5 h-full -ml-36 xl:ml-56'>
				<div className='z-10'>
					<Subtitle>Меня зовут Илья</Subtitle>
					<h2 className='text-5xl max-w-[480px] mb-4'>
						Я web-разработчик из Украины
					</h2>
					<div className='flex gap-3'>
						<Button>Портфолио</Button>
						<Button className='bg-none shadow-none hover:shadow-none'>
							Обо мне
						</Button>
					</div>
					<ToggleTheme />
				</div>
				<div className='flex justify-end items-end absolute -right-10 md:right-28 -bottom-[65.5px] sm:-bottom-[82.5px] md:-bottom-[100px] lg:-bottom-[134.5px]'>
					<img
						src={backgroundOne}
						alt='Background'
						className='w-auto lg:h-[774px] md:h-[574px] sm:h-[474px] h-[374px] bg-no-repeat bg-bottom bg-cover z-[1]'
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header
