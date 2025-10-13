import { Header } from '../../../widgets/header'
import { About } from '../../../widgets/about'
import { Experience } from '../../../widgets/experience'
import { Skills } from '../../../widgets/skills'
import { Portfolio } from '../../../widgets/portfolio'

function Home() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Experience />
				<Skills />
				<Portfolio />
			</main>
		</>
	)
}

export default Home
