import type { FC } from 'react'
import type { IExperienceItemsProps } from '../model/types'
import { motion } from 'framer-motion'

const ExperienceItem: FC<IExperienceItemsProps> = ({
	icon,
	title,
	subtitle,
	description
}) => {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			whileTap={{ scale: 0.99 }}
			transition={{ type: 'spring', stiffness: 320, damping: 20 }}
			className='max-w-[375px] ml-10 sm:ml-21 mt-6 glass rounded-2xl p-5 glow-accent will-change-transform'
		>
			<div className='flex gap-4 items-center'>
				<div className='relative shrink-0'>
					<div className='w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-400/30'>
						{icon}
					</div>
					<div className='h-0.5 absolute bg-gradient-to-r from-cyan-400/80 to-transparent top-1/2 -left-7 sm:-left-18.5 right-10' />
				</div>
				<div>
					<h5 className='text-base font-display font-bold tracking-tight'>
						{title}
					</h5>
					<span className='text-sm text-zinc-500 dark:text-zinc-400'>
						{subtitle}
					</span>
				</div>
			</div>
			<p className='mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 tracking-tight'>
				{description}
			</p>
		</motion.div>
	)
}

export default ExperienceItem
