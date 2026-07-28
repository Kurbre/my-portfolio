import { type FC } from 'react'
import { motion } from 'framer-motion'
import type { IAnimation } from '../model/types'
import { animationParams } from '../model/params'

const FadeIn: FC<IAnimation> = ({
	children,
	initialDistance = 40,
	initialPosition,
	delay = 0,
	className
}) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				...animationParams(initialDistance)[initialPosition]
			}}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
			className={className ?? 'z-10'}
		>
			{children}
		</motion.div>
	)
}

export default FadeIn
