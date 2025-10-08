import type { FC } from 'react'
import type { IProps } from '../model/types'
import cn from 'classnames'

const Title: FC<IProps> = ({
	children,
	position = 'center',
	className,
	...props
}) => {
	const positionLineStyles = {
		left: 'w-14',
		center: 'w-full',
		right: 'w-14 absolute right-0'
	}

	return (
		<div className='relative'>
			<h1
				className={cn('text-4xl font-mono font-extrabold', className)}
				{...props}
			>
				{children}
			</h1>
			<div
				className={cn(
					`h-1 bg-gradient-to-br from-amber-500 to-amber-300 
					dark:from-gray-600 dark:to-gray-500 mt-3`,
					positionLineStyles[position]
				)}
			/>
		</div>
	)
}

export default Title
