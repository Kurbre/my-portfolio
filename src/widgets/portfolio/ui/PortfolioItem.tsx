import type { FC } from 'react'
import type { IPortfolioData } from '../model/types'
import { IoMdPlanet } from 'react-icons/io'
import { motion } from 'framer-motion'

const PortfolioItem: FC<IPortfolioData> = ({
	url,
	title,
	image,
	description
}) => {
	const urlIframe = url.split('watch?v=').join('embed/')
	const isYoutubeUrl = url.includes('www.youtube.com')

	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ type: 'spring', stiffness: 280, damping: 22 }}
			className='glass glow-accent-inset rounded-3xl overflow-hidden
			border-cyan-400/30 dark:border-cyan-400/40
			p-6 md:p-10 lg:p-12 w-full h-full
			flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 lg:gap-10
			items-center lg:items-start'
		>
			{isYoutubeUrl ? (
				<iframe
					src={urlIframe}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
					className='rounded-2xl border border-white/10 outline-none flex-1 w-full max-w-full md:max-w-lg lg:max-w-xl h-64 md:h-80 lg:h-96 aspect-video shadow-xl'
					loading='lazy'
					draggable={false}
				/>
			) : (
				<img
					src={image}
					alt={title}
					loading='lazy'
					draggable={false}
					className='rounded-2xl object-cover flex-1 w-full max-w-full md:max-w-lg lg:max-w-xl h-64 md:h-80 lg:h-96 aspect-video border border-white/10 shadow-xl'
				/>
			)}

			<div className='flex flex-col justify-center items-start relative flex-1 min-w-0 w-full'>
				<motion.a
					href={url}
					className='inline-flex items-center gap-2 mb-3 self-end
					text-sm font-medium text-cyan-500 dark:text-cyan-400'
					target='_blank'
					rel='noopener noreferrer'
					whileHover={{ x: 3 }}
					whileTap={{ scale: 0.96 }}
				>
					<IoMdPlanet size={16} className='mt-0.5' />
					Перейти на сайт
				</motion.a>
				<h5 className='font-display text-lg md:text-xl lg:text-2xl font-bold mb-3 tracking-tight'>
					{title}
				</h5>
				<p className='font-body text-sm md:text-base lg:text-lg font-medium text-zinc-600 dark:text-zinc-300 leading-relaxed tracking-tight'>
					{description}
				</p>
			</div>
		</motion.div>
	)
}

export default PortfolioItem
