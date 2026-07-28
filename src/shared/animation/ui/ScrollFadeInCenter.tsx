import { type FC } from 'react'
import { motion } from 'framer-motion'
import type { IAnimation } from '../model/types'
import { animationParams } from '../model/params'
import { useMotionSafe } from '../hooks/useMotionSafe'

const ScrollFadeInCenter: FC<IAnimation> = ({
	children,
	initialPosition,
	initialDistance,
	delay = 0,
	className
}) => {
	const { isMobile, prefersReducedMotion, distance, duration, viewport } =
		useMotionSafe()

	const resolvedDistance = initialDistance
		? Math.min(initialDistance, distance || initialDistance)
		: distance

	const position =
		isMobile && (initialPosition === 'left' || initialPosition === 'right')
			? 'bottom'
			: initialPosition

	if (prefersReducedMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			className={className}
			initial={{
				opacity: 0,
				...animationParams(resolvedDistance)[position]
			}}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={viewport}
			transition={{ duration, ease: [0.22, 1, 0.36, 1], delay: isMobile ? Math.min(delay, 0.15) : delay }}
		>
			{children}
		</motion.div>
	)
}

export default ScrollFadeInCenter
