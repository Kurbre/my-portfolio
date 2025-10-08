import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { skillsData } from '../model/data'
import photoOne from '../assets/photo1.png'
import { useScroll } from '../../../shared/scroll'

const About = () => {
	const { refs } = useScroll()

	return (
		<section className='dark:bg-gray-700' ref={refs.about}>
			<Container>
				<div className='flex gap-5 flex-wrap sm:flex-nowrap'>
					<img
						src={photoOne}
						alt='Photo section about'
						className='w-[400px] h-[320px] object-cover rounded-2xl
						sm:mx-0 mx-auto
						shadow-lg md:w-[350px] md:h-[520px] sm:w-[300px] sm:h-[450px] max-w-full'
					/>
					<div>
						<Subtitle>Обо мне</Subtitle>
						<Title position='left'>Меня зовут Илья</Title>
						<p className='font-mono mt-6'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
						<div className='flex-wrap gap-1 mt-10 lg:flex hidden'>
							{skillsData.map(item => (
								<div className='flex gap-5 max-w-[250px]' key={item.id}>
									<Subtitle className='top-2 left-2'>{item.icon}</Subtitle>
									<div className='flex flex-col gap-1.5'>
										<h5 className='font-sans font-bold text-xl'>
											{item.title}
										</h5>
										<p className='text-sm font-sans'>{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='flex-wrap gap-1 mt-10 lg:hidden flex'>
					{skillsData.map(item => (
						<div className='flex gap-5 max-w-[250px]' key={item.id}>
							<Subtitle className='top-2 left-2'>{item.icon}</Subtitle>
							<div className='flex flex-col gap-1.5'>
								<h5 className='font-sans font-bold text-xl'>{item.title}</h5>
								<p className='text-sm font-sans'>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default About
