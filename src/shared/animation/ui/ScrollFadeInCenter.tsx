import { type FC } from 'react'
import { motion } from 'framer-motion'
import type { IAnimation } from '../model/types'
import { animationParams } from '../model/params'

const ScrollFadeInCenter: FC<IAnimation> = ({
	children,
	initialPosition,
	initialDistance = 40,
	delay = 0,
	className
}) => {
	return (
		<motion.div
			className={className}
			initial={{
				opacity: 0,
				...animationParams(initialDistance)[initialPosition]
			}}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
			transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
		>
			{children}
		</motion.div>
	)
}

export default ScrollFadeInCenter
