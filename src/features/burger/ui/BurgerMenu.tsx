import { forwardRef } from 'react'
import type { IProps } from '../model/types'
import { linksData } from '../model/data'
import { type SectionsKeys, useScroll } from '../../../shared/scroll'
import { Social } from '../../../shared/ui/social'
import cn from 'classnames'

const BurgerMenu = forwardRef<HTMLDivElement, IProps>(
	({ isOpen, setIsOpen }, ref) => {
		const { scrollToComponent } = useScroll()

		const clickHandler = (key: SectionsKeys) => {
			setIsOpen(false)
			scrollToComponent(key)
		}

		return (
			<div
				className={cn(
					'fixed inset-0 backdrop-blur-lg transition-all duration-300 cursor-pointer',
					isOpen
						? 'opacity-100 z-20 bg-black/20 dark:bg-black/40'
						: 'opacity-0 pointer-events-none bg-transparent'
				)}
				onClick={() => setIsOpen(false)}
			>
				<div
					ref={ref}
					onClick={e => e.stopPropagation()}
					className={cn(
						'absolute right-0 top-0 bottom-0 min-w-[250px] p-6 shadow-lg transition-transform duration-300 cursor-auto',
						'bg-gray-100 dark:bg-gray-700 flex flex-col justify-between',
						isOpen ? 'translate-x-0' : 'translate-x-full'
					)}
				>
					<ul className='flex flex-col gap-5 list-disc ml-5'>
						{linksData.map(({ href, label }, i) => (
							<li
								key={href + label + i}
								className='uppercase font-bold font-mono text-2xl hover:scale-105 hover:opacity-80
								duration-300 cursor-pointer'
								onClick={() => clickHandler(href)}
							>
								{label}
							</li>
						))}
					</ul>
					<Social size={30} className='justify-center' />
				</div>
			</div>
		)
	}
)

BurgerMenu.displayName = 'BurgerMenu'
export default BurgerMenu
