import type { FC } from 'react'
import type { IProps } from '../model/types.ts'
import cn from 'classnames'

const Subtitle: FC<IProps> = ({ children, className, ...props }) => {
	return (
		<div className='relative'>
			<div className='w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 dark:from-gray-700 dark:to-gray-500' />
			<span
				className={cn(
					'font-bold text-lg font-mono absolute left-3 top-0.5 whitespace-nowrap',
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
