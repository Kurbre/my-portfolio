import { type FC, type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

interface IStaggerContainerProps extends PropsWithChildren {
	className?: string
	stagger?: number
	delayChildren?: number
}

const StaggerContainer: FC<IStaggerContainerProps> = ({
	children,
	className,
	stagger = 0.08,
	delayChildren = 0.1
}) => {
	return (
		<motion.div
			className={className}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.15 }}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: stagger,
						delayChildren
					}
				}
			}}
		>
			{children}
		</motion.div>
	)
}

export default StaggerContainer
