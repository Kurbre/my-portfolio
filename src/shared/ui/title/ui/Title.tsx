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
		left: 'w-16',
		center: 'w-16 flex mx-auto',
		right: 'w-16 absolute right-0'
	}

	return (
		<div className='relative'>
			<h1
				className={cn(
					'text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight',
					className
				)}
				{...props}
			>
				{children}
			</h1>
			<div
				className={cn(
					`h-1 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 mt-4`,
					positionLineStyles[position]
				)}
			/>
		</div>
	)
}

export default Title
