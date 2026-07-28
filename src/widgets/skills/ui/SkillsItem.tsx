import type { FC } from 'react'
import type { ISkillsItemProps } from '../data/types'
import { motion } from 'framer-motion'

const SkillsItem: FC<ISkillsItemProps> = ({ title, icon }) => {
	return (
		<motion.div
			whileHover={{ y: -8, scale: 1.04 }}
			whileTap={{ scale: 0.96 }}
			transition={{ type: 'spring', stiffness: 350, damping: 18 }}
			className='group glass glow-accent w-[135px] h-[135px] rounded-3xl flex flex-col
			items-center justify-center p-2 cursor-default'
		>
			<motion.div
				className='text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300'
				whileHover={{ rotate: [0, -8, 8, 0] }}
				transition={{ duration: 0.45 }}
			>
				{icon}
			</motion.div>
			<span className='mt-4 text-sm text-center font-body font-medium tracking-tight'>
				{title}
			</span>
		</motion.div>
	)
}

export default SkillsItem
