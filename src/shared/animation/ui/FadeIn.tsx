import { type FC } from 'react'
import { motion } from 'framer-motion'
import type { IAnimation } from '../model/types'
import { animationParams } from '../model/params'
import { useMotionSafe } from '../hooks/useMotionSafe'

const FadeIn: FC<IAnimation> = ({
	children,
	initialDistance,
	initialPosition,
	delay = 0,
	className
}) => {
	const { isMobile, prefersReducedMotion, distance, duration } = useMotionSafe()

	const resolvedDistance = initialDistance
		? Math.min(initialDistance, distance || initialDistance)
		: distance

	const position =
		isMobile && (initialPosition === 'left' || initialPosition === 'right')
			? 'bottom'
			: initialPosition

	if (prefersReducedMotion) {
		return <div className={className ?? 'z-10'}>{children}</div>
	}

	return (
		<motion.div
			initial={{
				opacity: 0,
				...animationParams(resolvedDistance)[position]
			}}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{
				duration,
				ease: [0.22, 1, 0.36, 1],
				delay: isMobile ? Math.min(delay, 0.2) : delay
			}}
			className={className ?? 'z-10'}
		>
			{children}
		</motion.div>
	)
}

export default FadeIn
