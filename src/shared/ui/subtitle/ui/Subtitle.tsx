import type { FC } from 'react'
import type { IProps } from '../model/types'
import cn from 'classnames'

const Subtitle: FC<IProps> = ({
	children,
	className,
	position = 'left',
	...props
}) => {
	return (
		<div className='relative inline-flex items-center'>
			<div className='w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-500 opacity-90 shadow-lg shadow-cyan-400/40' />
			<span
				className={cn(
					'font-display font-bold text-lg tracking-tight absolute whitespace-nowrap',
					position === 'center' ? '-left-0.5 top-0.5' : 'left-3 top-0.5',
					className
				)}
				{...props}
			>
				{children}
			</span>
		</div>
	)
}

export default Subtitle
