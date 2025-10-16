import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import ExperienceColumn from './ExperienceColumn'
import ExperienceItem from './ExperienceItem'
import { PiStudent } from 'react-icons/pi'
import { useScroll } from '../../../shared/scroll'
import { ScrollFadeInCenter } from '../../../shared/animation'
import { HiMiniComputerDesktop } from 'react-icons/hi2'

const Experience = () => {
	const { refs } = useScroll()

	return (
		<section className='dark:bg-gray-700' ref={refs.experience}>
			<Container>
				<div className='flex items-center flex-col'>
					<ScrollFadeInCenter initialPosition='top' initialDistance={150}>
						<Subtitle position='center'>Опыт</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter initialPosition='left' initialDistance={350}>
						<Title className='text-center'>Опыт работы и образование</Title>
					</ScrollFadeInCenter>
				</div>
				<div className='flex mt-15 justify-between flex-wrap gap-10'>
					<ScrollFadeInCenter initialPosition='left' initialDistance={250}>
						<ExperienceColumn>
							<ExperienceItem
								title='Студент "ЗЕФК"'
								subtitle='Разроботка программного обеспечения'
								description='Я учусь на факультете разработки программного обеспечения, изучаю современные технологии и методологии разработки, чтобы создавать качественные и эффективные веб-приложения. Постоянно развиваю навыки программирования и работаю над практическими проектами.'
								icon={<PiStudent size={28} />}
							/>
							<ExperienceItem
								title='IT - навыки'
								subtitle='Самообразование'
								description='Я активно занимаюсь самообразованием в IT: изучаю новые технологии, фреймворки и инструменты, слежу за трендами веб-разработки и реализую собственные проекты, чтобы прокачивать навыки и практический опыт.'
								icon={<HiMiniComputerDesktop size={28} />}
							/>
						</ExperienceColumn>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter initialPosition='right' initialDistance={250}>
						<ExperienceColumn>
							<ExperienceItem
								title='Freecourses'
								subtitle='7 месяцев'
								description='Я работал в компании FreeCourses, где участвовал в разработке и поддержке веб-приложений, создавал интерфейсы и интегрировал бэкенд через API. Получил опыт командной работы, взаимодействия с заказчиками и соблюдения сроков проектов.'
								icon={<PiStudent size={28} />}
							/>
							<ExperienceItem
								title='Freelance'
								subtitle='1 год'
								description='Я год работал на фрилансе, выполнял заказы по созданию и поддержке веб-приложений, общался с клиентами и управлял проектами самостоятельно. Этот опыт помог развить ответственность, умение планировать задачи и писать качественный код.'
								icon={<PiStudent size={28} />}
							/>
						</ExperienceColumn>
					</ScrollFadeInCenter>
				</div>
			</Container>
		</section>
	)
}

export default Experience
