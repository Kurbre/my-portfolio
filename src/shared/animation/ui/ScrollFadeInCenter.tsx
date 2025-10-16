import { type FC, useEffect, useRef, useState } from 'react'
import { motion, useAnimation, type Variants } from 'framer-motion'
import type { IAnimation } from '../model/types'
import { animationParams } from '../model/params'

const ScrollFadeInCenter: FC<IAnimation> = ({
	children,
	initialPosition,
	initialDistance = 150,
	delay = 0
}) => {
	const controls = useAnimation()
	const ref = useRef<HTMLDivElement | null>(null)
	const [hasAnimated, setHasAnimated] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (!ref.current || hasAnimated) return

			const rect = ref.current.getBoundingClientRect()
			const windowMiddle = window.innerHeight / 2
			const elementMiddle = rect.top + rect.height / 2 - 300

			if (elementMiddle <= windowMiddle) {
				controls.start('visible')
				setHasAnimated(true)
			}
		}

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleScroll)
		handleScroll() // проверяем сразу при загрузке

		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)
		}
	}, [controls, hasAnimated])

	const variants: Variants = {
		hidden: {
			opacity: 0,
			...animationParams(initialDistance)[initialPosition]
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut', delay }
		}
	}

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={controls}
			variants={variants}
		>
			{children}
		</motion.div>
	)
}

export default ScrollFadeInCenter
