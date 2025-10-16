import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { useScroll } from '../../../shared/scroll'
import Form from './Form'
import photo from '../assets/images/photo.png'
import { Social } from '../../../shared/ui/social'
import { ScrollFadeInCenter } from '../../../shared/animation'

export const Contact = () => {
	const { refs } = useScroll()

	return (
		<section className='dark:bg-gray-700' ref={refs.contact}>
			<Container className='flex gap-8 lg:gap-16 flex-wrap md:flex-nowrap'>
				<ScrollFadeInCenter initialPosition='left' initialDistance={350}>
					<img
						src={photo}
						alt='Photo section about'
						className='w-full h-[600px] lg:w-[400px] lg:h-[600px] object-cover rounded-2xl
						sm:mx-0 mx-auto
						shadow-lg max-w-full'
						draggable={false}
						loading='lazy'
					/>
				</ScrollFadeInCenter>
				<div className='w-full'>
					<ScrollFadeInCenter initialPosition='right' initialDistance={350}>
						<Subtitle>Контакты</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={450}
						delay={0.5}
					>
						<Title position='left' className='mt-3'>
							Свяжитесь со мной
						</Title>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={550}
						delay={1}
					>
						<p className='text-md font-semibold mt-4'>
							Любым удобным для вас способом:
						</p>
						<Social size={30} />
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={650}
						delay={1.5}
					>
						<p className='text-md font-semibold mt-4'>
							Или оставьте ваши данные и я сама вам напишу:
						</p>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={350}
						delay={1.5}
					>
						<Form />
					</ScrollFadeInCenter>
				</div>
			</Container>
		</section>
	)
}
