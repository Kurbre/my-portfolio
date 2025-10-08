import type { FC } from 'react'
import type { IProps } from '../model/types'
import cn from 'classnames'

const Container: FC<IProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={cn('max-w-[1202px] mx-auto w-full px-4', className)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Container
