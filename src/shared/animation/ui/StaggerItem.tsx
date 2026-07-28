import type { FC, PropsWithChildren } from 'react'
import { motion, type Variants } from 'framer-motion'

interface IStaggerItemProps extends PropsWithChildren {
	className?: string
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
	}
}

const StaggerItem: FC<IStaggerItemProps> = ({ children, className }) => {
	return (
		<motion.div className={className} variants={itemVariants}>
			{children}
		</motion.div>
	)
}

export default StaggerItem
