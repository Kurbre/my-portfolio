import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { ToggleTheme } from '../../../features/toggle-theme'
import { Button } from '../../../shared/ui/button'
import { Burger } from '../../../features/burger'
import background from '../assets/images/background.png'
import { useScroll } from '../../../shared/scroll'
import { Social } from '../../../shared/ui/social'

const Header = () => {
	const { scrollToComponent } = useScroll()

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
				<Social size={21} />
			</div>
			<Container className='flex items-center justify-between gap-5 h-full -ml-36 xl:ml-56'>
				<div className='z-10'>
					<Subtitle>Меня зовут Илья</Subtitle>
					<h2 className='text-5xl max-w-[480px] mb-4'>
						Я web-разработчик из Украины
					</h2>
					<div className='flex gap-3'>
						<Button onClick={() => scrollToComponent('portfolio')}>
							Портфолио
						</Button>
						<Button
							className='bg-none shadow-none hover:shadow-none'
							onClick={() => scrollToComponent('about')}
						>
							Обо мне
						</Button>
					</div>
					<ToggleTheme />
				</div>
				<div className='flex justify-end items-end absolute -right-10 md:right-28 -bottom-[65.5px] sm:-bottom-[82.5px] md:-bottom-[100px] lg:-bottom-[134.5px]'>
					<img
						src={background}
						alt='Background'
						className='w-auto lg:h-[774px] md:h-[574px] sm:h-[474px] h-[374px] bg-no-repeat bg-bottom bg-cover z-[1]'
						draggable={false}
						loading='lazy'
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header
