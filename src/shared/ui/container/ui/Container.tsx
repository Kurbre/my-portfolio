import type { FC } from 'react'
import type { IProps } from '../model/props.ts'
import cn from 'classnames'

const Container: FC<IProps> = ({ children, className, ...props }) => {
	return (
		<div className={cn('max-w-[1202px] mx-auto w-full', className)} {...props}>
			{children}
		</div>
	)
}

export default Container
