import { forwardRef } from 'react'
import type { IProps } from '../model/types'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const Button = forwardRef<HTMLButtonElement, IProps>(
	({ children, className, ...props }, ref) => {
		return (
			<motion.div
				className='inline-flex'
				whileHover={{ scale: 1.03, y: -1 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: 'spring', stiffness: 400, damping: 22 }}
			>
				<button
					className={cn(
						`cursor-pointer min-w-[135px] inline-flex justify-center items-center
						bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500
						text-white transition-shadow h-12 font-body font-semibold text-base tracking-tight
						rounded-xl shadow-lg shadow-cyan-400/30
						hover:shadow-[0_0_28px_rgba(0,194,255,0.45)]
						px-5 relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed`,
						className
					)}
					ref={ref}
					{...props}
				>
					<span className='relative z-10'>{children}</span>
				</button>
			</motion.div>
		)
	}
)

Button.displayName = 'Button'
