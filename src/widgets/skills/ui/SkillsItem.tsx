import type { FC } from 'react'
import type { ISkillsItemProps } from '../data/types'
import { motion } from 'framer-motion'

const SkillsItem: FC<ISkillsItemProps> = ({ title, icon }) => {
	return (
		<motion.div
			whileHover={{ y: -6, scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			transition={{ type: 'spring', stiffness: 350, damping: 18 }}
			className='group glass glow-accent w-[135px] h-[135px] rounded-3xl flex flex-col
			items-center justify-center p-2 cursor-default will-change-transform'
		>
			<div className='text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300'>
				{icon}
			</div>
			<span className='mt-4 text-sm text-center font-body font-medium tracking-tight'>
				{title}
			</span>
		</motion.div>
	)
}

export default SkillsItem
