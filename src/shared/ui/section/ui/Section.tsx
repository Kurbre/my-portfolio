import { forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

interface ISectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
	tone?: 'default' | 'muted'
}

const Section = forwardRef<HTMLDivElement, ISectionProps>(
	({ children, className, tone = 'default', ...props }, ref) => {
		const isMuted = tone === 'muted'

		return (
			<section
				ref={ref}
				className={cn(
					'relative overflow-hidden pt-16 md:pt-28 pb-10',
					'transition-[background-color] duration-700 ease-in-out',
					isMuted
						? 'bg-zinc-200/55 dark:bg-[#11161f]'
						: 'bg-zinc-100/40 dark:bg-[#0b0e14]/40',
					className
				)}
				{...props}
			>
				<motion.div
					aria-hidden
					className={cn(
						'pointer-events-none absolute inset-0 -z-10',
						isMuted
							? 'bg-gradient-to-b from-cyan-400/[0.06] via-transparent to-sky-500/[0.05]'
							: 'bg-gradient-to-b from-transparent via-cyan-400/[0.04] to-transparent'
					)}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
				/>
				<div
					aria-hidden
					className='pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-100 dark:from-[#0b0e14] to-transparent opacity-80'
				/>
				<div
					aria-hidden
					className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-100 dark:from-[#0b0e14] to-transparent opacity-80'
				/>
				{children}
			</section>
		)
	}
)

Section.displayName = 'Section'

export default Section
