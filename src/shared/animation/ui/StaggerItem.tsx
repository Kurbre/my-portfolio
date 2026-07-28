import type { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { useMotionSafe } from '../hooks/useMotionSafe'

interface IStaggerItemProps extends PropsWithChildren {
	className?: string
	index?: number
}

const StaggerItem: FC<IStaggerItemProps> = ({
	children,
	className,
	index = 0
}) => {
	const { isMobile, prefersReducedMotion, duration, viewport } = useMotionSafe()

	if (prefersReducedMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={viewport}
			transition={{
				duration,
				ease: [0.22, 1, 0.36, 1],
				delay: isMobile ? Math.min(index * 0.03, 0.2) : Math.min(index * 0.04, 0.35)
			}}
		>
			{children}
		</motion.div>
	)
}

export default StaggerItem
