import { forwardRef } from 'react'
import type { IProps } from '../model/types'
import { linksData } from '../model/data'
import { type SectionsKeys, useScroll } from '../../../shared/scroll'
import { Social } from '../../../shared/ui/social'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

const BurgerMenu = forwardRef<HTMLDivElement, IProps>(
	({ isOpen, setIsOpen }, ref) => {
		const { scrollToComponent } = useScroll()

		const clickHandler = (key: SectionsKeys) => {
			setIsOpen(false)
			scrollToComponent(key)
		}

		return (
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='fixed inset-0 backdrop-blur-md z-40 cursor-pointer bg-black/30 dark:bg-black/50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							ref={ref}
							onClick={e => e.stopPropagation()}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 320, damping: 32 }}
							className={cn(
								'absolute right-0 top-0 bottom-0 min-w-[270px] p-6 cursor-auto',
								'glass-strong flex flex-col justify-between shadow-2xl'
							)}
						>
							<ul className='flex flex-col gap-4 list-none mt-10'>
								{linksData.map(({ href, label }, i) => (
									<motion.li
										key={href + label + i}
										initial={{ opacity: 0, x: 24 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.08 * i + 0.1 }}
										whileHover={{ x: 6 }}
										whileTap={{ scale: 0.97 }}
										className='uppercase font-display font-bold text-2xl tracking-tight
										cursor-pointer py-2 border-b border-white/10
										transition-colors duration-300 ease-out hover:text-cyan-400'
										onClick={() => clickHandler(href)}
									>
										{label}
									</motion.li>
								))}
							</ul>
							<Social size={28} className='justify-center' />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		)
	}
)

BurgerMenu.displayName = 'BurgerMenu'
export default BurgerMenu
