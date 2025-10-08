import { forwardRef } from 'react'
import type { IProps } from '../model/types'
import { links } from '../model/links'
import cn from 'classnames'

const BurgerMenu = forwardRef<HTMLDivElement, IProps>(
	({ isOpen, setIsOpen }, ref) => {
		const clickHandler = () => {
			setIsOpen(false)
		}

		return (
			<div
				className={cn(
					'fixed inset-0 backdrop-blur-lg -z-20 opacity-0 duration-300 cursor-pointer',
					isOpen ? 'opacity-100 z-20' : 'opacity-0 -z-20'
				)}
			>
				<div
					ref={ref}
					className={cn(
						'absolute right-0 top-0 bottom-0 shadow-md bg-gray-100  dark:bg-gray-700' +
							' p-6 duration-400 cursor-auto min-w-[250px] dark:text-white',
						isOpen ? 'translate-x-0' : 'translate-x-[1000px]'
					)}
				>
					<ul className='flex flex-col gap-5 list-disc ml-5'>
						{links.map(({ href, label }, i) => (
							<li
								key={href + label + i}
								className='uppercase font-bold font-mono text-2xl hover:scale-105 hover:opacity-80 duration-300'
								onClick={clickHandler}
							>
								<a href={href}>{label}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
)

BurgerMenu.displayName = 'BurgerMenu'
export default BurgerMenu
