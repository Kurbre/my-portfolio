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
		<div className='relative'>
			<div className='w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 dark:from-gray-700 dark:to-gray-500' />
			<span
				className={cn(
					'font-bold text-lg font-mono absolute whitespace-nowrap',
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
