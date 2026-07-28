import { type FC, type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { useMotionSafe } from '../hooks/useMotionSafe'

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
	const { isMobile, prefersReducedMotion, viewport } = useMotionSafe()

	if (prefersReducedMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			className={className}
			initial='hidden'
			whileInView='visible'
			viewport={viewport}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: isMobile ? Math.min(stagger, 0.04) : stagger,
						delayChildren: isMobile ? Math.min(delayChildren, 0.05) : delayChildren
					}
				}
			}}
		>
			{children}
		</motion.div>
	)
}

export default StaggerContainer
