import { Header } from '../../../widgets/header'
import { About } from '../../../widgets/about'
import { Experience } from '../../../widgets/experience'

function Home() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Experience />
			</main>
		</>
	)
}

export default Home
