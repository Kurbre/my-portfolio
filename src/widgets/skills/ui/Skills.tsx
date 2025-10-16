import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { skillsData } from '../data/data'
import SkillsItem from './SkillsItem'
import { useScroll } from '../../../shared/scroll'
import { ScrollFadeInCenter } from '../../../shared/animation'

const Skills = () => {
	const { refs } = useScroll()

	return (
		<section ref={refs.skills}>
			<Container>
				<div className='flex items-center flex-col'>
					<ScrollFadeInCenter initialPosition='left' initialDistance={350}>
						<Subtitle position='center' className='-left-3'>
							Навыки
						</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter initialPosition='right' initialDistance={350}>
						<Title className='mt-1 text-center'>Что я использую в работе</Title>
					</ScrollFadeInCenter>
				</div>
				<div className='flex gap-5 flex-wrap justify-center mt-10'>
					{skillsData.map(({ icon, title }) => (
						<SkillsItem icon={icon} title={title} key={icon + title} />
					))}
				</div>
			</Container>
		</section>
	)
}

export default Skills
