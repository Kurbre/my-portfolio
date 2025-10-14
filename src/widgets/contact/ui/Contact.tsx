import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { useScroll } from '../../../shared/scroll'
import {
	FaGithub,
	FaGithubSquare,
	FaInstagram,
	FaTelegram
} from 'react-icons/fa'
import Form from './Form'
import photo from '../assets/images/photo.png'

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
				/>
				<div className='w-full'>
					<Subtitle>Контакты</Subtitle>
					<Title position='left' className='mt-3'>
						Свяжитесь со мной
					</Title>
					<p className='text-md font-semibold mt-4'>
						Любым удобным для вас способом:
					</p>
					<div className='flex gap-3 mt-2.5'>
						<a
							rel='stylesheet'
							href='https://github.com/Kurbre'
							target='_blank'
						>
							<FaGithub size={30} />
						</a>
						<a
							rel='stylesheet'
							href='https://github.com/Marald12'
							target='_blank'
						>
							<FaGithubSquare size={30} />
						</a>
						<a
							rel='stylesheet'
							href='https://instagram.com/illiya_zmey'
							target='_blank'
						>
							<FaInstagram size={30} />
						</a>
						<a rel='stylesheet' href='https://t.me/illiya228' target='_blank'>
							<FaTelegram size={30} />
						</a>
					</div>
					<p className='text-md font-semibold mt-4'>
						Или оставьте ваши данные и я сама вам напишу:
					</p>
					<Form />
				</div>
			</Container>
		</section>
	)
}
