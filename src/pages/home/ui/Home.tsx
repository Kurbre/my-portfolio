import { Header } from '../../../widgets/header'
import { About } from '../../../widgets/about'
import { Experience } from '../../../widgets/experience'
import { Skills } from '../../../widgets/skills'
import { Portfolio } from '../../../widgets/portfolio'
import { Contact } from '../../../widgets/contact'

function Home() {
	return (
		<>
			<div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
				<div className='absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full bg-cyan-400/20 dark:bg-cyan-400/10 blur-3xl' />
				<div className='absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] max-w-[420px] max-h-[420px] rounded-full bg-sky-400/15 dark:bg-sky-400/10 blur-3xl' />
				<div className='absolute bottom-[-5%] left-[20%] w-[45vw] h-[45vw] max-w-[520px] max-h-[520px] rounded-full bg-blue-400/15 dark:bg-blue-500/10 blur-3xl' />
			</div>
			<Header />
			<main>
				<About />
				<Experience />
				<Skills />
				<Portfolio />
				<Contact />
			</main>
		</>
	)
}

export default Home
