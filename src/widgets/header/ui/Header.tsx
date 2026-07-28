import { Container } from '../../../shared/ui/container'
import { Subtitle } from '../../../shared/ui/subtitle'
import { ToggleTheme } from '../../../features/toggle-theme'
import { Button } from '../../../shared/ui/button'
import { Burger } from '../../../features/burger'
import background from '../assets/images/background.png'
import { useScroll } from '../../../shared/scroll'
import { Social } from '../../../shared/ui/social'
import { FadeIn } from '../../../shared/animation'
import { motion } from 'framer-motion'

const Header = () => {
	const { scrollToComponent } = useScroll()

	return (
		<header
			className='w-full min-h-[700px] md:min-h-[800px] h-[100svh] max-h-[920px] flex items-center relative
			overflow-hidden'
		>
			<div className='absolute inset-0 bg-gradient-to-br from-zinc-200 via-cyan-50 to-sky-100 dark:from-[#0b0e14] dark:via-[#0d1520] dark:to-[#0b0e14]' />
			<div className='pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyan-400/25 blur-3xl' />
			<div className='pointer-events-none absolute top-1/3 -right-16 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl' />
			<div className='pointer-events-none absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-blue-500/15 blur-3xl' />

			<Burger />

			<div className='rotate-270 font-display font-semibold text-sm tracking-tight flex items-center gap-3 -ml-32 md:-ml-21 z-10'>
				<span className='whitespace-nowrap'>Соціальні мережі</span>
				<div className='w-10 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-500' />
				<Social size={18} className='mt-0' />
			</div>

			<Container className='flex items-center justify-between gap-5 h-full -ml-36 xl:ml-56 relative z-10'>
				<div className='z-10 max-w-xl'>
					<FadeIn initialPosition='right' initialDistance={48} delay={0.15}>
						<div className='inline-flex glass rounded-2xl px-3 py-1.5 mb-2'>
							<Subtitle>Мене звати Ілля</Subtitle>
						</div>
					</FadeIn>
					<FadeIn initialPosition='left' initialDistance={48} delay={0.3}>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight max-w-[520px] mb-5 leading-[1.1]'>
							Я веб-розробник{' '}
							<span className='text-gradient'>з України</span>
						</h2>
					</FadeIn>
					<FadeIn initialPosition='bottom' initialDistance={36} delay={0.45}>
						<p className='text-zinc-600 dark:text-zinc-300 text-base md:text-lg mb-6 max-w-md tracking-tight'>
							Full-stack розробка з фокусом на сучасний UI, швидкість і чисту
							архітектуру.
						</p>
						<div className='flex flex-wrap gap-3'>
							<Button onClick={() => scrollToComponent('portfolio')}>
								Портфоліо
							</Button>
							<motion.div whileTap={{ scale: 0.95 }}>
								<Button
									className='bg-none bg-white/50 dark:bg-zinc-800/50 backdrop-blur-md
									border border-zinc-300/60 dark:border-cyan-400/30 text-zinc-900 dark:text-white
									shadow-none hover:shadow-[0_0_20px_rgba(0,194,255,0.25)]
									hover:bg-white/70 dark:hover:bg-zinc-800/70 dark:hover:border-cyan-400/50
									from-transparent via-transparent to-transparent'
									onClick={() => scrollToComponent('about')}
								>
									Про мене
								</Button>
							</motion.div>
						</div>
						<ToggleTheme />
					</FadeIn>
				</div>
				<motion.div
					initial={{ opacity: 0, x: 60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
					className='flex justify-end items-end absolute -right-10 md:right-28 -bottom-[65.5px] sm:-bottom-[82.5px] md:-bottom-[100px] lg:-bottom-[134.5px]'
				>
					<img
						src={background}
						alt='Background'
						className='w-auto lg:h-[774px] md:h-[574px] sm:h-[474px] h-[374px] bg-no-repeat bg-bottom bg-cover z-[1] drop-shadow-2xl'
						draggable={false}
						loading='lazy'
					/>
				</motion.div>
			</Container>
		</header>
	)
}

export default Header
