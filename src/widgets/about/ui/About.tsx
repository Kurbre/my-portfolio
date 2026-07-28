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
import type { ReactNode } from 'react'

const SkillCard = ({
	icon,
	title,
	description
}: {
	icon: ReactNode
	title: string
	description: string
}) => (
	<motion.div
		whileHover={{ y: -4 }}
		whileTap={{ scale: 0.98 }}
		className='flex gap-4 w-full sm:max-w-[280px] glass rounded-2xl p-4 glow-accent'
	>
		<div className='shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-400/30'>
			{icon}
		</div>
		<div className='flex flex-col gap-1.5 min-w-0'>
			<h5 className='font-display font-bold text-lg tracking-tight'>{title}</h5>
			<p className='text-sm font-body text-zinc-600 dark:text-zinc-400'>
				{description}
			</p>
		</div>
	</motion.div>
)

const About = () => {
	const { refs } = useScroll()

	return (
		<Section ref={refs.about} tone='default'>
			<div className='pointer-events-none absolute top-20 right-0 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl' />
			<div className='pointer-events-none absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl' />

			<Container>
				<div className='flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch sm:items-start'>
					<ScrollFadeInCenter
						initialPosition='left'
						initialDistance={48}
						className='w-full sm:w-auto sm:shrink-0 min-w-0'
					>
						<motion.div
							whileHover={{ y: -6 }}
							transition={{ type: 'spring', stiffness: 300, damping: 20 }}
							className='relative rounded-3xl overflow-hidden glass glow-accent p-1.5 w-full sm:w-auto mx-auto max-w-md sm:max-w-none'
						>
							<img
								src={photoOne}
								alt='Photo section about'
								className='w-full h-[280px] sm:w-[300px] sm:h-[450px] md:w-[350px] md:h-[520px] object-cover rounded-[1.25rem]'
								draggable={false}
								loading='lazy'
							/>
						</motion.div>
					</ScrollFadeInCenter>

					<div className='min-w-0 w-full flex-1'>
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
							<p className='font-body mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed tracking-tight text-sm sm:text-base break-words'>
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

						<StaggerContainer className='hidden lg:flex flex-wrap gap-4 mt-10'>
							{skillsData.map((item, index) => (
								<StaggerItem key={item.id} index={index}>
									<SkillCard
										icon={item.icon}
										title={item.title}
										description={item.description}
									/>
								</StaggerItem>
							))}
						</StaggerContainer>
					</div>
				</div>

				<StaggerContainer className='flex lg:hidden flex-col sm:flex-row flex-wrap gap-4 mt-8'>
					{skillsData.map((item, index) => (
						<StaggerItem key={item.id} index={index} className='w-full sm:w-auto'>
							<SkillCard
								icon={item.icon}
								title={item.title}
								description={item.description}
							/>
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</Section>
	)
}

export default About
