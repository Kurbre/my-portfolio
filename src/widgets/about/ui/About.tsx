import { Container } from '../../../shared/ui/container'
import { Section } from '../../../shared/ui/section'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { skillsData } from '../model/data'
import photoOne from '../assets/images/photo1.png'
import { useScroll } from '../../../shared/scroll'
import {
	ScrollFadeInCenter,
	StaggerContainer,
	StaggerItem
} from '../../../shared/animation'
import { motion } from 'framer-motion'

const About = () => {
	const { refs } = useScroll()

	return (
		<Section ref={refs.about} tone='default'>
			<div className='pointer-events-none absolute top-20 right-0 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl' />
			<div className='pointer-events-none absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl' />

			<Container>
				<div className='flex gap-8 flex-wrap sm:flex-nowrap items-start'>
					<ScrollFadeInCenter initialPosition='left' initialDistance={48}>
						<motion.div
							whileHover={{ y: -6 }}
							transition={{ type: 'spring', stiffness: 300, damping: 20 }}
							className='relative rounded-3xl overflow-hidden glass glow-accent p-1.5'
						>
							<img
								src={photoOne}
								alt='Photo section about'
								className='w-[400px] h-[320px] object-cover rounded-[1.25rem]
								sm:mx-0 mx-auto
								md:w-[350px] md:h-[520px] sm:w-[300px] sm:h-[450px] max-w-full'
								draggable={false}
								loading='lazy'
							/>
						</motion.div>
					</ScrollFadeInCenter>

					<div className='min-w-0 flex-1'>
						<ScrollFadeInCenter initialPosition='right' initialDistance={40}>
							<Subtitle>Про мене</Subtitle>
						</ScrollFadeInCenter>
						<ScrollFadeInCenter
							initialPosition='right'
							initialDistance={40}
							delay={0.12}
						>
							<Title position='left' className='mt-2'>
								Мене звати Ілля
							</Title>
						</ScrollFadeInCenter>
						<ScrollFadeInCenter
							initialPosition='right'
							initialDistance={40}
							delay={0.2}
						>
							<p className='font-body mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed tracking-tight'>
								Мене звати Ілля, я full-stack розробник з України. В IT уже 3
								роки: рік активно працював на фрілансі та 2+ роки займався
								комерційною розробкою. Створював і підтримував веб-додатки,
								працював з фронтендом і бекендом, взаємодіяв із замовниками та
								командою. Постійно вивчаю нові технології та розвиваюся
								професійно. Паралельно я навчаюся на факультеті розробки
								програмного забезпечення. Це допомагає системно зміцнювати
								знання та поєднувати практику з фундаментом. Окрім IT, я є
								діючим спортсменом з тайського боксу. Багаторічні тренування
								прищепили мені дисципліну, витривалість і вміння працювати на
								результат. Я пунктуальний, комунікабельний і спокійний у
								спілкуванні. Вмію слухати, поважати думку інших і дотримуватися
								домовленостей.
							</p>
						</ScrollFadeInCenter>

						<StaggerContainer className='flex-wrap gap-4 mt-10 lg:flex hidden'>
							{skillsData.map(item => (
								<StaggerItem key={item.id}>
									<motion.div
										whileHover={{ y: -5 }}
										className='flex gap-4 max-w-[280px] glass rounded-2xl p-4 glow-accent'
									>
										<div className='shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-400/30'>
											{item.icon}
										</div>
										<div className='flex flex-col gap-1.5'>
											<h5 className='font-display font-bold text-lg tracking-tight'>
												{item.title}
											</h5>
											<p className='text-sm font-body text-zinc-600 dark:text-zinc-400'>
												{item.description}
											</p>
										</div>
									</motion.div>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</div>

				<StaggerContainer className='flex-wrap gap-4 mt-10 lg:hidden flex'>
					{skillsData.map(item => (
						<StaggerItem key={item.id}>
							<motion.div
								whileHover={{ y: -5 }}
								className='flex gap-4 max-w-[280px] glass rounded-2xl p-4 glow-accent'
							>
								<div className='shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-400/30'>
									{item.icon}
								</div>
								<div className='flex flex-col gap-1.5'>
									<h5 className='font-display font-bold text-lg tracking-tight'>
										{item.title}
									</h5>
									<p className='text-sm font-body text-zinc-600 dark:text-zinc-400'>
										{item.description}
									</p>
								</div>
							</motion.div>
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</Section>
	)
}

export default About
