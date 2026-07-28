import { Container } from '../../../shared/ui/container'
import { Section } from '../../../shared/ui/section'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { useScroll } from '../../../shared/scroll'
import Form from './Form'
import photo from '../assets/images/photo.png'
import { Social } from '../../../shared/ui/social'
import { ScrollFadeInCenter } from '../../../shared/animation'
import { motion } from 'framer-motion'

export const Contact = () => {
	const { refs } = useScroll()

	return (
		<Section ref={refs.contact} tone='default' className='pb-10'>
			<div className='pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-sky-500/12 blur-3xl' />
			<div className='pointer-events-none absolute top-20 right-0 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl' />

			<Container className='flex gap-8 lg:gap-16 flex-wrap md:flex-nowrap'>
				<ScrollFadeInCenter initialPosition='left' initialDistance={48}>
					<motion.div
						whileHover={{ y: -6 }}
						transition={{ type: 'spring', stiffness: 300, damping: 20 }}
						className='glass glow-accent rounded-3xl p-1.5 overflow-hidden'
					>
						<img
							src={photo}
							alt='Photo section about'
							className='w-full h-[600px] lg:w-[400px] lg:h-[600px] object-cover rounded-[1.25rem]
							sm:mx-0 mx-auto max-w-full'
							draggable={false}
							loading='lazy'
						/>
					</motion.div>
				</ScrollFadeInCenter>
				<div className='w-full min-w-0'>
					<ScrollFadeInCenter initialPosition='right' initialDistance={40}>
						<Subtitle>Контакти</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={40}
						delay={0.1}
					>
						<Title position='left' className='mt-3'>
							Зв’яжіться зі мною
						</Title>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={36}
						delay={0.18}
					>
						<div className='glass rounded-2xl p-5 mt-5 glow-accent'>
							<p className='text-base font-semibold tracking-tight'>
								Будь-яким зручним для вас способом:
							</p>
							<Social size={26} />
						</div>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={36}
						delay={0.24}
					>
						<p className='text-base font-semibold mt-6 tracking-tight'>
							Або залиште свої дані, і я сам вам напишу:
						</p>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={36}
						delay={0.3}
					>
						<div className='glass rounded-3xl p-5 md:p-6 mt-4 glow-accent'>
							<Form />
						</div>
					</ScrollFadeInCenter>
				</div>
			</Container>
		</Section>
	)
}
