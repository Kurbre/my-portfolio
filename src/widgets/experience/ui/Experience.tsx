import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import ExperienceColumn from './ExperienceColumn'
import ExperienceItem from './ExperienceItem'
import { PiStudent } from 'react-icons/pi'
import { useScroll } from '../../../shared/scroll'

const Experience = () => {
	const { refs } = useScroll()

	return (
		<section className='dark:bg-gray-700' ref={refs.experience}>
			<Container>
				<div className='flex items-center flex-col'>
					<Subtitle position='center'>Опыт</Subtitle>
					<Title className='text-center'>Опыт работы и образование</Title>
				</div>
				<div className='flex mt-15 justify-between flex-wrap gap-10'>
					<ExperienceColumn>
						<ExperienceItem
							title='Студент "ЗЕФК"'
							subtitle='Разроботка программного обеспечения'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
				amet, consectetur adipiscing elit, sed do eiusmo.'
							icon={<PiStudent size={28} />}
						/>
						<ExperienceItem
							title='Студент "ЗЕФК"'
							subtitle='Разроботка программного обеспечения'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
				amet, consectetur adipiscing elit, sed do eiusmo.'
							icon={<PiStudent size={28} />}
						/>
					</ExperienceColumn>
					<ExperienceColumn>
						<ExperienceItem
							title='Студент "ЗЕФК"'
							subtitle='Разроботка программного обеспечения'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
				amet, consectetur adipiscing elit, sed do eiusmo.'
							icon={<PiStudent size={28} />}
						/>
						<ExperienceItem
							title='Студент "ЗЕФК"'
							subtitle='Разроботка программного обеспечения'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
				amet, consectetur adipiscing elit, sed do eiusmo.'
							icon={<PiStudent size={28} />}
						/>
					</ExperienceColumn>
				</div>
			</Container>
		</section>
	)
}

export default Experience
