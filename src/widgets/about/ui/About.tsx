import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { skillsData } from '../model/data'
import photoOne from '../assets/images/photo1.png'
import { useScroll } from '../../../shared/scroll'
import { ScrollFadeInCenter } from '../../../shared/animation'

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
						draggable={false}
						loading='lazy'
					/>
					<div>
						<ScrollFadeInCenter initialPosition='right'>
							<Subtitle>Обо мне</Subtitle>
						</ScrollFadeInCenter>
						<ScrollFadeInCenter
							initialPosition='right'
							initialDistance={350}
							delay={0.8}
						>
							<Title position='left'>Меня зовут Илья</Title>
						</ScrollFadeInCenter>
						<ScrollFadeInCenter
							initialPosition='right'
							initialDistance={350}
							delay={1.5}
						>
							<p className='font-mono mt-6'>
								Меня зовут Илья, я full-stack разработчик из Украины. В IT уже 2
								года: год активно работал на фрилансе и 7 месяцев занимался
								коммерческой разработкой. Создавал и поддерживал веб-приложения,
								работал с фронтендом и бэкендом, взаимодействовал с заказчиками
								и командой. Постоянно изучаю новые технологии и развиваюсь
								профессионально. Параллельно я учусь на факультете разработки
								программного обеспечения. Это помогает системно укреплять знания
								и сочетать практику с фундаментом. Помимо IT, я являюсь
								действующим спортсменом по тайскому боксу. Многолетние
								тренировки привили мне дисциплину, выносливость и умение
								работать на результат. Я пунктуальный, общительный и спокойный в
								коммуникации человек. Умею слушать, уважать мнение других и
								соблюдать договоренности.
							</p>
						</ScrollFadeInCenter>
						<ScrollFadeInCenter
							initialPosition='right'
							initialDistance={350}
							delay={1.5}
						>
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
						</ScrollFadeInCenter>
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
