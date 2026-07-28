import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(true)

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${breakpoint}px)`)
		const onChange = () => setIsMobile(media.matches)
		onChange()
		media.addEventListener('change', onChange)
		return () => media.removeEventListener('change', onChange)
	}, [breakpoint])

	return isMobile
}

export const useMotionSafe = () => {
	const isMobile = useIsMobile()
	const prefersReducedMotion = useReducedMotion()

	return {
		isMobile,
		prefersReducedMotion: !!prefersReducedMotion,
		distance: prefersReducedMotion ? 0 : isMobile ? 16 : 40,
		duration: prefersReducedMotion ? 0 : isMobile ? 0.35 : 0.55,
		viewport: {
			once: true as const,
			amount: isMobile ? 0.05 : 0.15,
			margin: isMobile ? '0px 0px 80px 0px' : '0px 0px -20px 0px'
		}
	}
}
