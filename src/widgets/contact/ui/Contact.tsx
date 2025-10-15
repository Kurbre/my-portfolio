import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { useScroll } from '../../../shared/scroll'
import Form from './Form'
import photo from '../assets/images/photo.png'
import { Social } from '../../../shared/ui/social'

export const Contact = () => {
	const { refs } = useScroll()

	return (
		<section className='dark:bg-gray-700' ref={refs.contact}>
			<Container className='flex gap-8 lg:gap-16 flex-wrap md:flex-nowrap'>
				<img
					src={photo}
					alt='Photo section about'
					className='w-full h-[600px] lg:w-[400px] lg:h-[600px] object-cover rounded-2xl
						sm:mx-0 mx-auto
						shadow-lg max-w-full'
					draggable={false}
					loading='lazy'
				/>
				<div className='w-full'>
					<Subtitle>Контакты</Subtitle>
					<Title position='left' className='mt-3'>
						Свяжитесь со мной
					</Title>
					<p className='text-md font-semibold mt-4'>
						Любым удобным для вас способом:
					</p>
					<Social size={30} />
					<p className='text-md font-semibold mt-4'>
						Или оставьте ваши данные и я сама вам напишу:
					</p>
					<Form />
				</div>
			</Container>
		</section>
	)
}
