import { Header } from '../../../widgets/header'
import { About } from '../../../widgets/about'
import { Experience } from '../../../widgets/experience'
import { Skills } from '../../../widgets/skills'

function Home() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Experience />
				<Skills />
			</main>
		</>
	)
}

export default Home
