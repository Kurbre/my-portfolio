import { Container } from '../../../shared/ui/container'
import { Section } from '../../../shared/ui/section'
import { Subtitle } from '../../../shared/ui/subtitle'
import { Title } from '../../../shared/ui/title'
import { skillsData } from '../data/data'
import SkillsItem from './SkillsItem'
import { useScroll } from '../../../shared/scroll'
import {
	ScrollFadeInCenter,
	StaggerContainer,
	StaggerItem
} from '../../../shared/animation'

const Skills = () => {
	const { refs } = useScroll()

	return (
		<Section ref={refs.skills} tone='default'>
			<div className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl' />

			<Container>
				<div className='flex items-center flex-col'>
					<ScrollFadeInCenter initialPosition='left' initialDistance={40}>
						<Subtitle position='center' className='-left-3'>
							Навички
						</Subtitle>
					</ScrollFadeInCenter>
					<ScrollFadeInCenter
						initialPosition='right'
						initialDistance={40}
						delay={0.1}
					>
						<Title className='mt-2 text-center'>
							Що я використовую в роботі
						</Title>
					</ScrollFadeInCenter>
				</div>
				<StaggerContainer
					className='flex gap-5 flex-wrap justify-center mt-12'
					stagger={0.06}
				>
					{skillsData.map(({ icon, title }) => (
						<StaggerItem key={icon + title}>
							<SkillsItem icon={icon} title={title} />
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</Section>
	)
}

export default Skills
