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
						<Subtitle position='center'>Досвід</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter initialPosition='left' initialDistance={350}>
						<Title className='text-center'>Досвід роботи та освіта</Title>
					</ScrollFadeInCenter>
				</div>
				<div className='flex mt-15 justify-between flex-wrap gap-10'>
					<ScrollFadeInCenter initialPosition='left' initialDistance={250}>
						<ExperienceColumn>
							<ExperienceItem
								title='Студент "ЗЕФК"'
								subtitle='Розробка програмного забезпечення'
								description='Я навчаюся на факультеті розробки програмного забезпечення, вивчаю сучасні технології та методології розробки, щоб створювати якісні та ефективні веб-додатки. Постійно розвиваю навички програмування та працюю над практичними проєктами.'
								icon={<PiStudent size={28} />}
							/>
							<ExperienceItem
								title='IT - навички'
								subtitle='Самоосвіта'
								description='Я активно займаюся самоосвітою в IT: вивчаю нові технології, фреймворки та інструменти, стежу за трендами веб-розробки та реалізую власні проєкти, щоб покращувати навички та практичний досвід.'
								icon={<HiMiniComputerDesktop size={28} />}
							/>
						</ExperienceColumn>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter initialPosition='right' initialDistance={250}>
						<ExperienceColumn>
							<ExperienceItem
								title='Macroglide'
								subtitle='1 рік та 4 місяці'
								description='Я працював Full-stack розробником у компанії Macroglide, де розробляв веб-додатки на Next.js та NestJS, будував REST API та налаштовував бази даних через Prisma. Впроваджував архітектуру FSD, оптимізував продуктивність і брав активну участь у командному плануванні та code review.'
								icon={<PiStudent size={28} />}
							/>
							<ExperienceItem
								title='Freecourses'
								subtitle='7 місяців'
								description='Я працював у компанії FreeCourses, де брав участь у розробці та підтримці веб-додатків, створював інтерфейси та інтегрував бекенд через API. Отримав досвід командної роботи, взаємодії із замовниками та дотримання строків проєктів.'
								icon={<PiStudent size={28} />}
							/>
							<ExperienceItem
								title='Freelance'
								subtitle='1 рік'
								description='Я рік працював на фрілансі, виконував замовлення зі створення та підтримки веб-додатків, спілкувався з клієнтами та самостійно керував проєктами. Цей досвід допоміг розвинути відповідальність, вміння планувати задачі та писати якісний код.'
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
